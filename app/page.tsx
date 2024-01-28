"use client";
import { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { error } from "console";
import Image from "next/image";
import Weather from "./(components)/weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.NEXT_PUBLIC_WEADAPP_KEY}`;

  const fetchWeather = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.get(url).then((response: any) => {
        setWeather(response.data);
        console.log(response.data);
      });
      setCity("");
      setLoading(false);
      console.log("This is the type", typeof weather);
      console.log("This is", city);
    } catch (error) {
      console.log("ERR:", error);
    }
  };

  return (
    <main
      className="absolute top-0 left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg bg-cover
    flex justify-center p-10 bg-fixed 
    "
    >
      <div className="backdrop-blur-md bg-white/30 rounded-3xl p-5 ">
        <div className=" rounded-xl outline outline-slate-300 p-2">
          <form>
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Search city"
              className="bg-transparent placeholder:text-gray-400 text-slate-300 focus:outline-none text-2xl"
            />
            <button className="p-2 text-slate-300" onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {<Weather weather={weather} />}
      </div>
    </main>
  );
}
