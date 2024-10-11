import { useState } from "react";
import convertToCelcius from "./utilitis/convertToCelcius";
import GetDate from "./utilitis/date";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState({});

  const getLatLongData = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=1601f45f20dc6566be2c8fc114e4cb1c`
    );
    const data = await res.json();
    const lat = data[0].lat;
    const lon = data[0].lon;

    await getWeatherApi(lat, lon);
    setInputValue("");
  };

  const getWeatherApi = async (a, b) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=1601f45f20dc6566be2c8fc114e4cb1c`
    );
    const resJs = await res.json();

    // console.log(resJs.name);
    // console.log(resJs.sys.country);
    // console.log(resJs.weather[0].icon);
    // console.log(resJs.main.temp);
    // console.log(resJs.weather[0].description);
    // console.log(resJs.wind.speed);

    const weatherInfo = {
      city: resJs.name,
      countryCod: resJs.sys.country,
      icon: `https://openweathermap.org/img/wn/${resJs.weather[0].icon}.png`,
      temperature: convertToCelcius(resJs.main.temp),
      description: resJs.weather[0].description,
      wind: resJs.wind.speed,
    };
    setWeather(weatherInfo);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    if (e.key === "Enter") {
      getLatLongData();
    }
  };

  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center">
      <div className=" min-w-96 flex flex-col items-center gap-4 py-4 shadow-2xl rounded-md">
        <h1 className="text-[#279a1a] font-bold text-2xl py-2 px-2 ">
          GeeksforGeeks Weather App
        </h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleClick}
          className="bg-cyan-50 rounded-full py-1 px-6 min-w-40 border-gray-300 border-2 text-xs outline-none"
          placeholder="Enter City Name..."
        />
        <h1 className="font-bold text-2xl">
          {weather.city || "City"}, {weather.countryCod || "Country"}
        </h1>
        <p className="text-gray-500 font-bold">{GetDate()}</p>
        <div className="flex gap-2">
          <img className="-mt-5" src={weather.icon} alt="" srcSet="" />
          <p className="font-bold">{weather.temperature || "Nan"} &#8451;</p>
        </div>
        <div>
          <p className="text-gray-500 font-bold uppercase">
            {weather.description || "Description"}
          </p>
          <p className="text-gray-500 text-xs font-bold">
            Wind Speed: {weather.wind}m/s
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
