import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import useWeatherData from "../hooks/useWeatherData";

export const WeatherDisplay = ({ cityName }) => {
  const [weatherData, fetchWeatherData] = useWeatherData();

  useEffect(() => {
    fetchWeatherData(cityName);
  }, [cityName]);

  return (
    <div className="flex flex-col mt-20">
      {cityName && (
        <div className="font-medium text-2xl mb-2">{cityName} Weather</div>
      )}
      {weatherData.status === "Loading" && <p>Loading...</p>}
      {weatherData.status === "Success" && (
        <div>
          {weatherData.list.map(
            ({ date, description, minTemp, maxTemp, iconUrl }) => (
              <WeatherCard
                key={date}
                date={date}
                description={description}
                minTemp={minTemp}
                maxTemp={maxTemp}
                iconUrl={iconUrl}
              />
            )
          )}
        </div>
      )}
      {weatherData.status === "Failure" && (
        <p>Oops! Failed to get weather data. Please try again later.</p>
      )}
      {weatherData.status === "NotRequested" && (
        <p>Select a city to see the weather</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
