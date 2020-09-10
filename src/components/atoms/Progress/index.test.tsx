import React from "react";
import Progress from ".";
import { shallow } from "enzyme";

describe("<Progress />", () => {
  let container: any = null;

  beforeEach(() => {
    container = shallow(<Progress />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });
});
