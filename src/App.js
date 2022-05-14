import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/welcome" exact  component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/photography" component={Photography} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
