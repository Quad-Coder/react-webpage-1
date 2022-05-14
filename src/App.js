import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/photography" component={Photography} />
          <Route path="/projects" component={Projects} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
