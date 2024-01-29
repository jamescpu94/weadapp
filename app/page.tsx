"use client";
import { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Weather from "./(components)/Weather";

interface MainWeatherData {
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
}
const Home: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<MainWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=7&appid=${process.env.NEXT_PUBLIC_WEADAPP_KEY}&units=metric`;
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
      className="min-h-screen top-0 left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-fixed
    p-10
    "
    >
      <div className="backdrop-blur-sm bg-white/30 rounded-3xl p-5 ">
        <div className=" rounded-xl p-2">
          <form className="flex justify-between w-full">
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Search city"
              className="bg-transparent placeholder:text-gray-300 text-white/90  w-4/6 focus:outline-none text-2xl"
            />
            <button className="p-2 text-white/90" onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
      </div>
      <div className=" mt-10 ">
        <div className="backdrop-blur-xl bg-white/10  rounded-2xl p-10 ">
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
