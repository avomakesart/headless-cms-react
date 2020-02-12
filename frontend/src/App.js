import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components/header/index";
import Footer from "./components/footer/index";
import BluecatPage from "./components/blog-posts/BluecatPage";

import Home from "./pages/home/index";
import AllWork from "./pages/work/all/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";
import News from "./pages/news/index";

import Businnes from "./pages/work/business";
import Ecommerce from "./pages/work/ecommerce";
import Health from "./pages/work/health";
import UxUi from "./pages/work/ux-ui";
import ELearning from "./pages/work/elearning";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={AllWork} />
        <Route path="/business" component={Businnes} />
        <Route path="/ecommerce" component={Ecommerce} />
        <Route path="/health" component={Health} />
        <Route path="/ux-ui" component={UxUi} />
        <Route path="/elearning" component={ELearning} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/bluecat/:id" component={BluecatPage} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
