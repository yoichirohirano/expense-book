import React from "react";
import Navigation from "./";
import { shallow } from "enzyme";

describe("<Navigation />", () => {
  let container: any = null;
  beforeEach(() => {
    container = shallow(<Navigation />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });
});
