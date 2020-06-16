import React from "react";
import ConnectedNavigation, { Navigation, NavigationProps } from "./";
import { shallow } from "enzyme";

describe("<Navigation />", () => {
  let container: any = null;
  const props: NavigationProps = {
    pathname: "",
    route: jest.fn(),
  };

  beforeEach(() => {
    container = shallow(<Navigation {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });
});
