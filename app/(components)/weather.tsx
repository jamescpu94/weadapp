"use client";
import React from "react";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
}

const Weather: React.FC<{ weather: WeatherData | null }> = ({ weather }) => {
  console.log("this is it fuck", weather?.main?.feels_like);
  if (!weather || !weather.main) {
    return (
      <div>
        <h1>No Weather Data</h1>
      </div>
    );
  } else {
    const {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      sea_level,
      grnd_level,
    } = weather.main;
    return (
      <div>
        <h1>Weather</h1>
        <h2>Feels Like: {feels_like} °C</h2>
        <p>dsad</p>
        {/* Display other weather details as needed */}
      </div>
    );
  }
};

export default Weather;
