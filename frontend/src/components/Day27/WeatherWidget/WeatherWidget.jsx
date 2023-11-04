import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // For Chart.js v3 or newer

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const [chartData, setChartData] = useState({});

    const fetchWeatherData = async () => {
        if (!latitude || !longitude) {
            setError("Please enter both latitude and longitude.");
            return;
        }
        setIsFetching(true);
        setError(null);

        try {
            const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
            const data = response.data.hourly.temperature_2m;

            setWeatherData(response.data); // This will hold the full response
            const labels = data.map((_, index) => index); // This should be replaced with actual labels if available

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }
                ]
            });

            setIsFetching(false);
        } catch (err) {
            setError("Failed to fetch data. Please try again.");
            setIsFetching(false);
        }
    };

    return (
        <section className="weather-widget">
            <div>
                <input
                    type="text"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Latitude"
                />
                <input
                    type="text"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Longitude"
                />
                <button onClick={fetchWeatherData} disabled={isFetching} className='globalbtn' style={{marginBottom:'1rem'}}>
                    {isFetching ? "Loading..." : "Get Weather"}
                </button>
            </div>
            {error && <p className="error">{error}</p>}
            {weatherData && chartData.datasets && (
                <div>
                    <h3>Weather Data:</h3>
                    <Line data={chartData} />
                </div>
            )}
        </section>
    );
};

export default WeatherWidget;