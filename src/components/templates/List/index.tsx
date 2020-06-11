import React from "react";
import Box from "@material-ui/core/Box";
import ListView from "@/components/organisms/ListView";
import Navigation from "@/components/atoms/Navigation";

const List: React.FC = () => {
  return (
    <>
      <Box zIndex="2">
        <ListView />
      </Box>
      <Box position="fixed" bottom="0" zIndex="2">
        <Navigation></Navigation>
      </Box>
    </>
  );
};

export default List;
