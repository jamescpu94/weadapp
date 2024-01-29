"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { error } from "console";
import Image from "next/image";
import Weather from "./(components)/weather";

interface MainWeatherData {
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
const Home: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<MainWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEADAPP_KEY}&units=metric`;

  const fetchWeather = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.get<MainWeatherData>(url).then((response: any) => {
        setWeather(response.data);
        console.log(response.data);
      });
      setLoading(false);
      console.log("This is the weather", weather);
    } catch (error) {
      console.log("ERR:", error);
      setWeather(null);
    }
  };

  return (
    <main
      className="absolute top-0 left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg bg-cover
    p-10 bg-fixed 
    "
    >
      <div className="backdrop-blur-md bg-white/30 rounded-3xl p-5 ">
        <div className=" rounded-xl outline outline-slate-300 p-2">
          <form className="flex justify-between w-full">
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Search city"
              className="bg-transparent placeholder:text-gray-300 text-slate-300  w-4/6 focus:outline-none text-2xl"
            />
            <button className="p-2 text-slate-300" onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
      </div>
      <div className=" mt-10 backdrop-blur-md bg-white/30 rounded-3xl p-5 ">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-5 ">
          {weather ? (
            <Weather weather={weather} />
          ) : (
            <h5 className="text-center m-auto text-white p-10">
              City not found
            </h5>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
