"use client";
import React from "react";
import Image from "next/image";

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
  console.log("pass weather", weather);

  if (weather) {
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
      <div className="text-center p-10 text-white ">
        <h4>{weather.name}</h4>
        <Image
          className="m-auto"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          width={100}
          height={100}
          alt="weather icon"
        />
        <h2>{temp.toFixed(0)}°C</h2>
        <h5>{description}</h5>
        <p>Feels like {feels_like.toFixed(0)} °C</p>
        <p>
          L: {temp_min.toFixed(0)} °C - H: {temp_max.toFixed(0)} °C
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No Weather Data</h1>
      </div>
    );
  }
};

export default Weather;
