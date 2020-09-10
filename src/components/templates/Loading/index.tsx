import React from "react";
import Box from "@material-ui/core/Box";
import Progress from "@/components/atoms/Progress";

const Loading: React.FC = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      zIndex="2"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Progress />
    </Box>
  );
};

export default Loading;
