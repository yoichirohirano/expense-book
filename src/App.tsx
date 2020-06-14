import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import TopPage from "@/components/Pages/TopPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <TopPage />
    </div>
  );
}

export default App;
