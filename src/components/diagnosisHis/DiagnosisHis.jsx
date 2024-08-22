import React from 'react'
import { Line } from 'react-chartjs-2';
import './diagnosisHis.css'
import respiratory from "../../assets/respiratory rate.svg"
import temperature from "../../assets/temperature.svg"
import heart_rate from "../../assets/HeartBPM.svg"
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);


function DiagnosisHis({ DiagnosisData }) {
    let list_data = DiagnosisData
    const data = [
        { date: '2024-01-01', systolic: 120, diastolic: 80 },
        { date: '2024-01-02', systolic: 125, diastolic: 85 },
        { date: '2024-01-03', systolic: 110, diastolic: 75 },
        // Add more data points as needed
    ];
    const chartData = {
        labels: data.map(item => item.date), // X-axis labels (e.g., dates)
        datasets: [
            {
                label: 'Systolic Blood Pressure',
                data: data.map(item => item.systolic), // Y-axis data for systolic
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'Diastolic Blood Pressure',
                data: data.map(item => item.diastolic), // Y-axis data for diastolic
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Blood Pressure (mmHg)',
                },
                min: 0,
            },
        },
    };
    return (
        <>
            <div className='diagnosis-main-container'>
                <p className='diagnosis-txt'>Diagnosis History</p>


                <div className="chart-wrapper">
                    <div className="chart-container">
                        <Line data={chartData} options={options} />
                    </div>
                    <div className="legend-container">
                        <div className="legend-item">
                            <div className="legend-label">
                                <span className="legend-title">Systolic Blood Pressure</span>
                                <span className="legend-content">160</span>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="legend-item">
                            <div className="legend-label">
                                <span className="legend-title">Diastolic Blood Pressure</span>
                                <span className="legend-content">85</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="box-container">
                    <div className="box box_1">
                        <img src={respiratory} alt="Image 1" className='img_respository' />
                        <p className="rate_css">Respiratory Rate</p>
                        <p className="bpm_css">20 bpm</p>
                        <p className="normal_css">Normal</p>
                    </div>
                    <div className="box box_2">
                        <img src={temperature} alt="Image 2" className='img_respository' />
                        <p className="rate_css">Temperature</p>
                        <p className="bpm_css">98.6°F</p>
                        <p className="normal_css">Normal</p>
                    </div>
                    <div className="box box_3">
                        <img src={heart_rate} alt="Image 3" className='img_respository' />
                        <p className="rate_css">Heart Rate</p>
                        <p className="bpm_css">78 bpm</p>
                        <p className="normal_css">Lower than Average</p>
                    </div>
                </div>
            </div>

            <div className='diagnosis-main-container mt-2'>
                <div>
                    <p className='diagnosis-txt'>Diagnostic List</p>
                    <table className=" table">
                        <thead>
                            <tr className="tableHeading">
                                <th scope="col" className="tableHeading">Name</th>
                                <th scope="col" className="tableHeading1">Description</th>
                                <th scope="col" className="tableHeading2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list_data&& list_data.diagnostic_list.map((diagnostic, index) => (
                                <tr key={index} className="tableRow">
                                    <td>{diagnostic.name}</td>
                                    <td>{diagnostic.description}</td>
                                    <td>{diagnostic.status}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DiagnosisHis