import React from "react";
import "./App.css";
import About from "./routes/About";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;
