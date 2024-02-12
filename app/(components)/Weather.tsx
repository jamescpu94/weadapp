"use client";
import React from "react";
import Image from "next/image";
import Card from "./Card";
import convertUnixUTCto12Hour from "./TimeConverter";
import WindDirection from "./WindDirectionConverter";
import { BsPlus } from "react-icons/bs";

interface WeatherData {
  wind: {
    deg: number;
    speed: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
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
  id: number;
}

const Weather: React.FC<{ weather: WeatherData; handleAdd: Function }> = ({
  weather,
  handleAdd,
}) => {
  console.log("pass weather", weather);

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

  const { speed, deg } = weather.wind;
  const { country, sunrise, sunset } = weather.sys;
  const { main, description, icon } = weather.weather[0];

  return (
    <div className=" backdrop-blur-xl bg-white/10  rounded-2xl p-10 justify-end relative">
      <button
        onClick={() => handleAdd(weather.name)}
        className="flex ml-auto font-semibold bg-white text-gray-700  p-2 rounded-xl absolute top-5 right-5"
      >
        <BsPlus size={25} />
      </button>
      <h3 className="text-white text-center md:text-left">
        {weather.name}, {country}
      </h3>

      <div className="md:flex">
        <div className="text-center p-10 text-white">
          <div className="flex justify-center py-5">
            <Image
              className=""
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              width={60}
              height={60}
              alt="weather icon"
            />
            <h2>{temp.toFixed(0)}°C</h2>
          </div>
          <h5>{description}</h5>
          <p>Feels like {feels_like.toFixed(0)} °C</p>
          <p>
            L: {temp_min.toFixed(0)} °C - H: {temp_max.toFixed(0)} °C
          </p>
        </div>

        <div className="gap-5 p-5 text-white grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full ">
          <Card title="Humidity" data={`${humidity.toFixed(0)}%`} />
          <Card title="Pressure" data={`${pressure.toFixed(0)} hPa`} />
          <Card title="Sunrise" data={convertUnixUTCto12Hour(sunrise)} />
          <Card title="Sunset" data={convertUnixUTCto12Hour(sunset)} />
          <Card title="Wind speed" data={`${speed.toFixed(0)} km/h`} />
          <Card title="Wind direction" data={WindDirection(deg)} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
