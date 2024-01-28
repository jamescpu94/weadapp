"use client";
import React from "react";

interface weatherInt {
  weather: {
    humidity: string;
  };
}
const Weather: React.FC<weatherInt> = ({ weather }) => {
  console.log("data weather", typeof weather);
  return (
    <div>
      <h1>Weather</h1>

      <h1>{}</h1>
    </div>
  );
};

export default Weather;

<h1>Weather</h1>;
