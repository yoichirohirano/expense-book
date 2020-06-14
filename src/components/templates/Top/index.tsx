import React from "react";
import { Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ChartView from "@/components/organisms/ChartView";
import ListView from "@/components/organisms/ListView";
import Navigation from "@/components/atoms/Navigation";

const Top: React.FC = () => {
  return (
    <>
      <Box zIndex="2">
        <Switch>
          <Route exact path="/" component={ChartView} />
          <Route path="/list" component={ListView} />
        </Switch>
      </Box>
      <Box position="fixed" bottom="0" zIndex="2">
        <Navigation></Navigation>
      </Box>
    </>
  );
};

export default Top;
