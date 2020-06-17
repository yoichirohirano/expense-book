import React from "react";
import { Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ChartView from "@/components/organisms/ChartView";
import ListView from "@/components/organisms/ListView";
import BudgetView from "@/components/organisms/BudgetView";
import CategoryView from "@/components/organisms/CategoryView";
import Navigation from "@/components/atoms/Navigation";

const Top: React.FC = () => {
  return (
    <>
      <Box zIndex="2" marginBottom="60px">
        <Switch>
          <Route exact path="/" component={ChartView} />
          <Route path="/list" component={ListView} />
          <Route path="/budget" component={BudgetView} />
          <Route path="/category" component={CategoryView} />
        </Switch>
      </Box>
      <Box position="fixed" bottom="0" zIndex="2">
        <Navigation></Navigation>
      </Box>
    </>
  );
};

export default Top;
