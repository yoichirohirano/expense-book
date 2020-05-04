import React from "react";
import Box from "@material-ui/core/Box";

interface H6TitleProps {
  text: string;
}

const H6Title: React.FC<H6TitleProps> = (props) => {
  return (
    <Box
      fontSize="h6.fontSize"
      textAlign="center"
      padding="20px 0 0"
      fontFamily="Roboto"
    >
      {props.text}
    </Box>
  );
};

export default H6Title;
