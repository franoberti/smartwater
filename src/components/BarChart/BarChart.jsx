import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './barChart.module.css'

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        let myChart = null;

        const createChart = () => {

            const isMobile = window.innerWidth <= 576;
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [
                        {
                            data: [500, 1000, 1500, 1200, 800],
                            backgroundColor: "#1A3D7D",
                            barThickness: isMobile ? 35 : 70, 
                        },
                        {
                            data: [800, 1200, 1000, 1500, 500],
                            backgroundColor: '#367DFD',
                            barThickness: isMobile ? 35 : 70,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: true,
                            offset: true,
                            barPercentage: 0.8,
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    responsive: isMobile? false : true, // Permitir que el gráfico sea responsive
                    maintainAspectRatio: isMobile? true : false, // Desactivar el mantenimiento automático del aspecto
                },
            });
        };

        const destroyChart = () => {
            if (myChart) {
                myChart.destroy();
            }
        };

        destroyChart(); // Destruir el gráfico existente (si hay alguno)
        createChart();  // Crear el nuevo gráfico

        // Limpieza al desmontar el componente
        return () => {
            destroyChart();
        };
    }, []);

    return (
        <canvas ref={chartRef} className={`${styles.barchart}`}></canvas>
    );
};

export default BarChart;