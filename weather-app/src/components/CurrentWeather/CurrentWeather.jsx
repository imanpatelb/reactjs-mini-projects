import React from "react";

const CurrentWeather = ({ data }) => {
  return (
      <div className="w-300 max-w-sm mx-auto rounded-3xl shadow-2xl bg-opacity-50 backdrop-blur-sm border-slate-800-500 border-opacity-5 text-white bg-blue-400 pb-5 my-5 px-5 py-5">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="font-semibold text-lg mb-1">{data.city}</p>
            <p className="font-normal text-base">{data.weather[0].description}</p>
          </div>
          <img
              alt="weather"
              className="w-25"
              src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="mb-5">
          <p className="font-semibold text-6xl leading-none tracking-tighter">{Math.round(data.main.temp)}°C</p>
        </div>
        <div className="pt-5 border-t border-white">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-normal">Feels like</span>
            <span className="text-sm font-semibold">
            {Math.round(data.main.feels_like)}°C
          </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-normal">Wind</span>
            <span className="text-sm font-semibold">{data.wind.speed} m/s</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-normal">Humidity</span>
            <span className="text-sm font-semibold">{data.main.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-normal">Pressure</span>
            <span className="text-sm font-semibold">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
  );
};

export default CurrentWeather;
