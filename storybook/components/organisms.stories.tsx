import React from "react";
import Box from "@material-ui/core/Box";
import Footer from "../../src/components/organisms/Footer";

const props = {
  onClick: (): boolean => {
    return true;
  },
  text: "BUTTON",
};

export const footer = () => {
  return (
    <>
      <Box css={{ "padding-top": "60vh" }}></Box>
      <Footer onClick={props.onClick}></Footer>
    </>
  );
};

export default {
  title: "organisms",
};
