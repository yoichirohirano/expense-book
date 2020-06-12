import React from "react";
import { Route } from "react-router-dom";
import ChartPage from "@/components/Pages/ChartPage";
import ListPage from "@/components/Pages/ListPage";
import BudgetPage from "@/components/Pages/BudgetPage";
import CategoryPage from "@/components/Pages/CategoryPage";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <>
        <Route exact path="/" component={ChartPage} />
        <Route path="/list" component={ListPage} />
        <Route path="/budget" component={BudgetPage} />
        <Route path="/category" component={CategoryPage} />
      </>
    </div>
  );
}

export default App;
