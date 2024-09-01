import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../../components/Spinner";
import {
  MdSearch,
  MdCloud,
  MdOutlineWbSunny,
  MdGrain,
  MdSnowing,
  MdBolt,
  MdRemoveRedEye,
  MdThermostat,
  MdOpacity,
  MdAir,
} from "react-icons/md";

const apiKey = "0b443d472dab60a8bbfc6acbee135cc9";

export const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("jordan");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setLocation(inputValue);
    }
    setInputValue("");
  };

  useEffect(() => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    axios
      .get(url)
      .then((res) => {
        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
      });
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [errorMsg]);

  if (!data && !loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
        Loading...
      </div>
    );
  }

  let icon = "";

  switch (data?.weather[0].main) {
    case "Clouds":
      icon = <MdCloud className="text-6xl text-gray-400" />;
      break;
    case "Haze":
      icon = <MdCloud className="text-6xl text-gray-400" />;
      break;
    case "Rain":
    case "Drizzle":
      icon = <MdGrain className="text-6xl text-sky-500" />;
      break;
    case "Snow":
      icon = <MdSnowing className="text-6xl neon-text" />;
      break;
    case "Thunderstorm":
      icon = <MdBolt className="text-6xl text-gray-300" />;
      break;
    case "Clear":
      icon = <MdOutlineWbSunny className="text-6xl text-yellow-400" />;
      break;
    default:
      icon = <MdCloud className="text-6xl neon-text" />;
      break;
  }

  const date = new Date();

  return (
    <section className="weather flex flex-col items-center justify-center mt-12 p-6 bg-gradient-to-b from-purple-700 to-blue-700 min-h-screen text-black neon-bg">
      {errorMsg && (
        <div className="bg-pink-600 text-white p-3 rounded mb-4 shadow-lg neon-border">
          {`${errorMsg.response.data.message}`}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center mb-8 w-full max-w-lg"
      >
        <input
          type="text"
          placeholder="Search by country or city"
          onChange={handleInput}
          value={inputValue}
          className="p-3 w-full rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 neon-input"
        />
        <button
          type="submit"
          className="bg-pink-600 p-3 rounded-r-lg hover:bg-pink-700 transition duration-300 neon-btn"
        >
          <MdSearch className="text-xl text-white" />
        </button>
      </form>
      <div className="flex flex-col items-center text-center w-full max-w-2xl">
        {loading ? (
          <div className="flex flex-col gap-2 justify-center items-center">
            <Spinner />
            Loading...
          </div>
        ) : (
          data && (
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full neon-card">
              <div className="flex items-center justify-center mb-6">
                <div className="mr-4">{icon}</div>
                <div>
                  <div className="text-4xl font-bold mb-2 neon-text">
                    {data.name}, {data.sys.country}
                  </div>
                  <div className="text-lg text-gray-300">
                    {date.toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="text-7xl font-bold mb-4 neon-text">
                {parseInt(data.main.temp)}°C
              </div>
              <div className="text-2xl capitalize mb-4 text-gray-300">
                {data.weather[0].description}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg neon-card-item">
                  <MdRemoveRedEye className="text-3xl mr-2 text-pink-500" />
                  <span>Visibility: {data.visibility / 1000} km</span>
                </div>
                <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg neon-card-item">
                  <MdThermostat className="text-3xl mr-2 text-pink-500" />
                  <span>Feels like: {parseInt(data.main.feels_like)}°C</span>
                </div>
                <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg neon-card-item">
                  <MdOpacity className="text-3xl mr-2 text-pink-500" />
                  <span>Humidity: {data.main.humidity}%</span>
                </div>
                <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg neon-card-item">
                  <MdAir className="text-3xl mr-2 text-pink-500" />
                  <span>Wind: {data.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
