import React from "react";
import Box from "@material-ui/core/Box";
import Navigation from "@/components/atoms/Navigation";
import AddButton from "@/components/atoms/AddButton";

interface Props {
  onClick: (props: any) => any;
}

const addButtonWrapperStyle = {
  position: "absolute",
  right: "20px",
  top: "-76px",
};

const Footer: React.FC<Props> = (props) => {
  return (
    <Box css={{ position: "relative" }}>
      <Navigation></Navigation>
      <Box css={addButtonWrapperStyle}>
        <AddButton onClick={props.onClick}></AddButton>
      </Box>
    </Box>
  );
};

export default Footer;
