import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import Freelance from "../pages/Freelance";
import Home from "../pages/Home";
import Personal from "../pages/Personal";
import Playground from "../pages/Playground";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/personal" component={Personal} />
          <Route exact path="/freelance" component={Freelance} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/playground" component={Playground} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
