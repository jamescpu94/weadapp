"use client";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Weather from "./(components)/Weather";
import CityList from "./(components)/CityList";
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
  id: number;
}
const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [cityList, setCityList] = useState<Array<string>>([]);
  const [weather, setWeather] = useState<MainWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&cnt=7&appid=${process.env.NEXT_PUBLIC_WEADAPP_KEY}&units=metric`;

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get<MainWeatherData>(url);
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("ERR:", error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const addToFave = (cityName: string) => {
    setCityList([cityName, ...cityList]);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCity(search);
  };

  const handleCitySelection = (selectedCity: string) => {
    console.log("Selected City", city);
    setCity(selectedCity);
  };
  useEffect(() => {
    // Fetch weather data whenever the city changes
    if (city !== "") {
      fetchWeather();
    }
  }, [city]);
  return (
    <main
      className="text-white min-h-screen top-0 left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-fixed
    p-10
    "
    >
      <h2>Weadapp</h2>
      <div className="mt-10 flex flex-col lg:flex-row">
        <CityList cities={cityList} onCitySelect={handleCitySelection} />

        <div className="w-full">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-5 my-5 ">
            {/* Search */}
            <form className="flex justify-between w-full">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search city"
                className="bg-transparent placeholder:text-gray-300 text-white/90  w-full focus:outline-none text-2xl"
              />
              <button className="p-2 text-white/90" onClick={handleSubmit}>
                <BsSearch size={20} />
              </button>
            </form>
          </div>
          {weather ? (
            <Weather weather={weather} handleAdd={addToFave} />
          ) : (
            <div className="  backdrop-blur-xl bg-white/10  rounded-2xl p-10 ">
              <h5 className="text-center m-auto text-white p-10">
                City not found
              </h5>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
