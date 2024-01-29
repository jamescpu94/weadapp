"use client";
import React from "react";
import Image from "next/image";
// Weather.tsx
interface WeatherData {
  name: string;
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
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}
const Weather: React.FC<{ weather: WeatherData | null }> = ({ weather }) => {
  console.log("icon", weather);
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

    const { main, description, icon } = weather.weather[0];

    return (
      <div className="justify-items-center grid">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          width={100}
          height={100}
          alt="weather icon"
        />
        <h3>{weather.name}</h3>
        <h1>{temp.toFixed(0)} °C</h1>
        <h1>{description}</h1>
        <h2>Feels Like: {feels_like.toFixed(0)} °C</h2>
      </div>
    );
  }
};

export default Weather;
