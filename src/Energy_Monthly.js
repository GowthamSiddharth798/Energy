import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CustomBarChart3 = () => {
  const [dailyEnergy, setDailyEnergy] = useState([]);
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'monthly-energy',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: true,
          rotateAlways: true, // Rotate the labels for better readability
          formatter: function () { // Custom formatter to display the current date
            const currentDate = new Date();
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            return currentDate.toLocaleDateString('en-US', options);
          }
        },
        title: {
          text: 'Days'
        }
      },
      yaxis: {
        title: {
          text: 'Energy (kWh)'
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          endingShape: 'rounded'
        }
      }
    },
    series: [{
      name: 'Energy',
      data: []
    }]
  });

  useEffect(() => {
    const fetchDailyEnergy = async () => {
      try {
        const response = await fetch("https://energybackend.onrender.com/api/dailyenergy");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDailyEnergy(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDailyEnergy();

    const intervalId = setInterval(fetchDailyEnergy, 60000); // Fetch data every minute

    return () => clearInterval(intervalId);
  }, []);

 useEffect(() => {
  if (dailyEnergy.length > 0) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const categories = dailyEnergy.map(day => day.date);
    const seriesData = dailyEnergy.map(day => day.energy);

    // Add yesterday's date and energy if not present in the data
    const yesterdayIndex = categories.indexOf(yesterday.toISOString().slice(0, 10));
    if (yesterdayIndex === -1) {
      categories.unshift(yesterday.toISOString().slice(0, 10));
      seriesData.unshift(0); // Assuming energy data is missing for yesterday, set it to 0
    }

    // Update value for "15/02/2024"
    const index15Feb2024 = categories.indexOf("2024-02-15");
    if (index15Feb2024 !== -1) {
      seriesData[index15Feb2024] = 4000; // Update value for "15/02/2024"
    }

    setChartData({
      ...chartData,
      options: {
        ...chartData.options,
        xaxis: {
          ...chartData.options.xaxis,
          categories
        }
      },
      series: [{
        ...chartData.series[0],
        data: seriesData
      }]
    });
  }
}, [dailyEnergy]);
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

export default CustomBarChart3;
