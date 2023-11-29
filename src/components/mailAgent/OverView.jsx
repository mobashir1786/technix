import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const OverView = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(document.getElementById('myChart'), {
            type: 'line',
            data: {
                labels: Array.from({ length: 31 }, (_, i) => i + 1), // Array from 1 to 31
                datasets: [
                    {
                        label: 'Number of Emails',
                        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                        fill: false,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                        pointRadius: 5,
                        pointHoverRadius: 8,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        // Return a cleanup function to destroy the chart when the component unmounts
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);
    return (
        <div className='overview'>
            <h1 className="overviewHeading">Transation OverView</h1>
            <div>Emails Per Day Chart (Line Graph)</div>
            <canvas id="myChart"></canvas>
        </div>
    )
}

export default OverView
