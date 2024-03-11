import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div className="w-full px-4 md:px-0">
      {weatherData.weather ? (
        <div className="w-[80%] max-w-xl mx-auto bg-gray-300 shadow-lg rounded-xl p-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <div className="flex flex-col items-center justify-between h-full">
                <div>
                  <p className="text-xl">
                    {weatherData.name}, {weatherData.sys.country}
                  </p>
                  <p className="text-sm uppercase">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-5xl font-semibold">
                    {weatherData.main.temp.toFixed(2)}°C
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between items-center">
              <div className="relative mb-4">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                  className="w-32 md:w-48"
                />
              </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col gap-2 items-center text-xs">
                  <div className="flex  gap-3  justify-between w-full">
                    <p>Feels Like</p>
                    <p className="font-bold">
                      {weatherData.main.feels_like.toFixed(2)} °C
                    </p>
                  </div>
                  <div className="flex  gap-3  justify-between w-full">
                    <p>Humidity</p>
                    <p className="font-bold">{weatherData.main.humidity} %</p>
                  </div>
                  <div className="flex gap-3 justify-between w-full">
                    <p>Wind Speed: </p>
                    <p className="font-bold">
                      {weatherData.wind.speed.toFixed(2)} KPH
                    </p>
                  </div>
                  <div className="flex  gap-3  justify-between w-full">
                    <p>Pressure</p>
                    <p className="font-bold">{weatherData.main.pressure} hPa</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
