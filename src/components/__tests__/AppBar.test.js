import React from "react";
import { shallow } from "enzyme";
import AppBar from "../AppBar";

describe("<AppBar />", () => {
  it("renders welcome message", () => {
    const titleText = "TITLE_TEXT";
    const wrapper = shallow(<AppBar title={titleText} />);

    expect(wrapper.contains(titleText)).toEqual(true);
  });
});
