import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import { Switch, Route, useLocation } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const location = useLocation();
  console.log(location)
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={AboutUs} exact />
          <Route path="/work" component={OurWork} exact />
          <Route path="/contact" component={ContactUs} exact />
          <Route path="/work/:id" component={MovieDetails} exact />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
