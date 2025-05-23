import React from "react";
import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />}/>
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
