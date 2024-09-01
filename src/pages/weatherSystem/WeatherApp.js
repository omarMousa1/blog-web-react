import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../../components/Spinner";

const apiKey = "0b443d472dab60a8bbfc6acbee135cc9";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API%20key}

export const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("jordan");
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);

    if (inputValue !== "") {
      setLocation(inputValue);
    }

    const input = document.querySelector("input");

    input.value = "";
  };

  console.log(inputValue);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);

  if (!data) {
    return (
      <div>
        <div>
          <Spinner />
        </div>
      </div>
    );
  }

  let icon = "";

  // switch (data.weather[0].main) {
  //   case "Clouds":
  //     icon = {
  //       /*MdCloudy icon*/
  //     };
  //     break;
  //   case "Haza":
  //     icon = {
  //       /*CloudHaza2fill icon*/
  //     };
  //     break;
  //   case "Rain":
  //     icon = {
  //       /*MdRain icon*/
  //     };
  //     break;
  //   case "Clear":
  //     icon = {
  //       /*MdSunny icon*/
  //     };
  //     break;
  //   case "Drizzle":
  //     icon = {
  //       /*MdCloudDrizzleFill icon*/
  //     };
  //     break;
  //   case "Snow":
  //     icon = {
  //       /*MdSnow icon*/
  //     };
  //     break;
  //   case "Thunderstorm":
  //     icon = {
  //       /*MdThunderstorm icon*/
  //     };
  //     break;

  //   default:
  //     break;
  // }

  const date = new Date();

  return (
    <section>
      <form>
        <div>
          <input
            type="text"
            placeholder="Search by country or city"
            onChange={(e) => handleInput(e)}
          />
          <button onClick={(e) => handleSubmit(e)}>
            {/* MdSearch icon */}
          </button>
        </div>
      </form>
      <div>
        <div>
          <div>
            <div>{icon}</div>
            <div>
              <div>
                {data.name}, {data.sys.country}
              </div>
              <div>
                {date.getUTCDate()} / {date.getUTCMonth() + 1} /
                {date.getFullYear()}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>{parseInt(data.main.temp)}</div>
              <div>{/*celsius icon */}</div>
            </div>
            <div>{data.weather[0].description}</div>
          </div>
          <div>
            <div>
              <div>
                <div>{/*icon eye */}</div>
                <div>
                  Visibility <span>{data.visibility / 1000} km </span>
                </div>
                <div>{/*icon Thermometer */}</div>
                <div>
                  Feels like{" "}
                  <div>
                    {parseInt(data.main.feels_like)}{" "}
                    {/* temperatureCelsius icon */}{" "}
                  </div>
                </div>
              </div>

              <div>
                <div>{/*icon water */}</div>
                <div>
                  Humidity <span>{data.main.humidity} % </span>
                </div>
                <div>{/*icon Wind */}</div>
                <div>
                  Wind
                  <span>{data.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
