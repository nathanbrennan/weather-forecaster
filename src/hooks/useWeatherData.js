import { useState } from "react";
import moment from "moment";

const parseApiResult = (result) => {
  const parsedApiResult = {
    data: [],
  };

  if (result.data && Array.isArray(result.data)) {
    parsedApiResult.data = result.data.map((item) => {
      let iconUrl;

      if (item.weather && item.weather.icon) {
        iconUrl = `${process.env.REACT_APP_WEATHER_ICON_URL}${item.weather.icon}.png`;
      }

      return {
        date: (item.datetime && moment(item.datetime).valueOf()) || null,
        description: (item.weather && item.weather.description) || "",
        minTemp: item.app_min_temp || null,
        maxTemp: item.app_max_temp || null,
        iconUrl,
      };
    });
  }

  return parsedApiResult;
};

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState({ status: "NotRequested" });

  const fetchWeatherData = (cityName) => {
    setWeatherData({ status: "Loading" });

    fetch(`${process.env.REACT_APP_WEATHER_API_URL}${cityName}`)
      .then((res) => res.json())
      .then(
        (result) => {
          const parsedApiResult = parseApiResult(result);

          if (parsedApiResult.data) {
            setWeatherData({
              status: "Success",
              list: parsedApiResult.data,
            });
          } else {
            setWeatherData({
              status: "Failure",
              error: "Failed to parse api result",
            });
          }
        },
        (error) => {
          setWeatherData({
            status: "Failure",
            error,
          });
        }
      );
  };

  return [weatherData, fetchWeatherData];
};

export default useWeatherData;
