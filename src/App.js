import React, { Fragment } from "react";
import AppBar from "./components/AppBar";
import WeatherScreen from "./components/WeatherScreen";

function App() {
  return (
    <Fragment>
      <AppBar title="Weather Forecaster" />
      <WeatherScreen />
    </Fragment>
  );
}

export default App;
