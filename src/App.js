import React from "react";
import "./App.css";
import About from "./routes/About";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;
