import React from "react";
import AddBudgetButton from "./";
import { shallow, mount } from "enzyme";

// describe("<AddBudgetButton />", () => {
//   let container: any = null;

//   const props = {};

//   afterEach(() => {
//     container.unmount();
//     container = null;
//   });

//   test("should match the snapshot", () => {
//     container = shallow(<AddBudgetButton {...props} />);
//     expect(container.html()).toMatchSnapshot();
//   });

//   test("should have proper props", () => {
//     container = shallow(<AddBudgetButton {...props} />);
//     expect(container.find(".AddButton").props()).toMatchObject({
//       onClick: onClickFunction,
//     });
//   });

//   test("should show date picker on click", () => {
//     container = mount(<AddBudgetButton {...props} />);
//     container.simulate("click");
//     expect(onClickFunction).toBeCalled();
//   });
// });
