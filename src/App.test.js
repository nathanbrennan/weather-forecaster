import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import AppBar from "./components/AppBar";

describe("<App />", () => {
  it("renders a landing page", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(AppBar).exists()).toEqual(true);
  });
});
