import React from "react";
import { shallow } from "enzyme";
import WeatherCard from "../WeatherCard";

const defaultProps = {
  date: 1589689808192,
  description: "DESCRIPTION_TEXT",
  minTemp: "MIN_TEMP",
  maxTemp: "MAX_TEMP",
};

describe("<WeatherCard />", () => {
  it("renders a weather card with an image", () => {
    const props = {
      ...defaultProps,
      iconUrl: "ICON_URL",
    };

    const wrapper = shallow(<WeatherCard {...props} />);

    expect(wrapper.find("img").prop("src")).toEqual(props.iconUrl);
    expect(wrapper.find(".test-date").text()).toEqual("Sunday, 17 May");
    expect(wrapper.find(".test-description").text()).toEqual(props.description);
    expect(wrapper.find(".test-maxTemp").text()).toEqual(
      `Max: ${props.maxTemp}`
    );
    expect(wrapper.find(".test-minTemp").text()).toEqual(
      `Min: ${props.minTemp}`
    );
  });

  it("renders a weather card without and image", () => {
    const wrapper = shallow(<WeatherCard {...defaultProps} />);

    expect(wrapper.find("img").exists()).toEqual(false);
    expect(wrapper.find(".test-date").text()).toEqual("Sunday, 17 May");
    expect(wrapper.find(".test-description").text()).toEqual(
      defaultProps.description
    );
    expect(wrapper.find(".test-maxTemp").text()).toEqual(
      `Max: ${defaultProps.maxTemp}`
    );
    expect(wrapper.find(".test-minTemp").text()).toEqual(
      `Min: ${defaultProps.minTemp}`
    );
  });
});
