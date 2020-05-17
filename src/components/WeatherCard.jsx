import React from "react";
import moment from "moment";

export const WeatherCard = ({
  date,
  description,
  minTemp,
  maxTemp,
  iconUrl,
}) => {
  return (
    <div className="flex items-stretch justify-between w-full rounded overflow-hidden shadow p-4 mb-2">
      <div className="flex items-center">
        {iconUrl && (
          <img
            className="w-16 h-16 mr-4"
            src={iconUrl}
            alt="icon depicting weather"
          />
        )}
        <div className="flex flex-col justify-between">
          <div className="test-date text-sm text-gray-600 flex">
            {moment(date).format("dddd, D MMMM")}
          </div>
          <div className="test-description font-medium text-xl">
            {description}
          </div>
        </div>
      </div>
      <div className="">
        <div className="test-maxTemp bg-gray-200 mb-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Max: {maxTemp}
        </div>
        <div className="test-minTemp bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Min: {minTemp}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
