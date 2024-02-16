import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CustomBarChart2 = () => {
  const [energyData, setEnergyData] = useState([]);
  const [lastTenEnergy, setLastTenEnergy] = useState([]);
  const [chartData, setChartData] = useState({
      options: {
          chart: {
              id: 'realtime',
              animations: {
                  enabled: true,
                  easing: 'linear',
                  dynamicAnimation: {
                      speed: 2000
                  }
              },
              toolbar: {
                  show: false
              }
          },
          xaxis: {
            type: 'category',
            categories: [],
            labels: {
                show: true,
            },title: {
                text: 'Time'
            }
        },
          yaxis: {
              title: {
                  text: 'Energy'
              }
          },
          stroke: {
              curve: 'smooth'
          },
          dataLabels: {
              enabled: false
          }
      },
      series: [{
          name: 'Energy',
          data: []
      }]
  });

  const getCurrentTime = () => {
      const now = new Date();
      return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  };

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("https://energybackend.onrender.com/api/sensordata");
              if (!response.ok) {
                  throw new Error('Failed to fetch data');
              }
              const data = await response.json();

              // Update energy data
              setEnergyData(prevData => [...prevData, data.energy]);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      // Fetch data initially
      fetchData();

      // Fetch data every 2 seconds (example)
      const intervalId = setInterval(fetchData, 5000);

      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if (energyData.length > 0) {
              // Update last ten energy values
              const lastTenEnergy = energyData.slice(-10);
              setLastTenEnergy(lastTenEnergy);

              // Update chart data
              setChartData(prevChartData => ({
                  ...prevChartData,
                  options: {
                      ...prevChartData.options,
                      xaxis: {
                          ...prevChartData.options.xaxis,
                          categories: lastTenEnergy.map((_, index) => getCurrentTime())
                      }
                  },
                  series: [{
                      ...prevChartData.series[0],
                      data: lastTenEnergy
                  }]
              }));
          }
      }, 2000);

      return () => clearInterval(intervalId);
  }, [energyData]);

  return (
      <div className="bar-chart">
          <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height="350"
              width="650"
          />
      </div>
  );
}

export default CustomBarChart2;
