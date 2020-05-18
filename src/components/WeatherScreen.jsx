import React, { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import CitySelector from "./CitySelector";

const WeatherScreen = () => {
  const [cityName, setCityName] = useState("Brisbane");

  return (
    <div className="max-w-screen-sm m-auto flex flex-col mt-20">
      <CitySelector onChange={(e) => setCityName(e.target.value)} />
      <WeatherDisplay cityName={cityName} />
    </div>
  );
};

export default WeatherScreen;
