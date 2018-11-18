import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header";
import Home from "./component/home/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
