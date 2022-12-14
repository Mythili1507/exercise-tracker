import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import CreateExercise from "./components/CreateExercise";
import ExercisesList from "./components/ExercisesList";

import EditExercise from "./components/EditExercise";
import CreateUser from "./components/CreateUser";


// Main component- hint: PascalCase
function App() {
  // plain text , jsx -> single parent 
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact element={<ExercisesList/>} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
        
      </Routes>
    </Router>


  );

}

export default App;
