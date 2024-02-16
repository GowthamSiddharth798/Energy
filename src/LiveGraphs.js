import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CustomBarChart = () => {
    const [powerData, setPowerData] = useState([]);
    const [lastTenPower, setLastTenPower] = useState([]);
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
                    text: 'Power'
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
            name: 'Power',
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

                // Update power data
                setPowerData(prevData => [...prevData, data.power]);
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
            if (powerData.length > 0) {
                // Update last ten power values
                const lastTen = powerData.slice(-10);
                setLastTenPower(lastTen);

                // Update chart data
                setChartData(prevChartData => ({
                    ...prevChartData,
                    options: {
                        ...prevChartData.options,
                        xaxis: {
                            ...prevChartData.options.xaxis,
                            categories: lastTen.map((_, index) => getCurrentTime())
                        }
                    },
                    series: [{
                        ...prevChartData.series[0],
                        data: lastTen
                    }]
                }));
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, [powerData]);

    return (
        <div className="bar-chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height="350"
                width="650"
            />
        </div>
    );
}

export default CustomBarChart;



