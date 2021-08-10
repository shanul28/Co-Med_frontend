import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'
import { red } from '@material-ui/core/colors';

const Chart = ({ data: { confirmed, deaths, recovered } }, country) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            setDailyData(await fetchDailyData());
            console.log(dailyData);
        }
        fetchData();

    }, []);
    const lineChart = (dailyData.length ? (<Line data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: 'blue',
            fill: true,
        }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Death',
            borderColor: 'red',
            fill: true,
            backgroundColor: "#ebc3c3",
            borderColor: 'red',
        }],
    }} />) : null);

    console.log(confirmed, recovered, deaths);

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ["rgba(0, 0, 255, 0.6)",
                            " rgba(0, 255, 0, 0.6)",
                            " rgba(255, 0, 0, 0.6)"],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current case in ${country}` },

                }}
            />
        ) : null
    )

    return (<div className={styles.container}>
        {country ? barChart : lineChart}
    </div>)
}
export default Chart;