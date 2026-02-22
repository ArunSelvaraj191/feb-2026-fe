import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./modules/Login";
import Portfiolio from "./modules/Portfolio";
import Projects from "./modules/Projects";
import Register from "./modules/Register";
import Skills from "./modules/Skills";
import Users from "./modules/Users";

function App() {
  const [count, setCount] = useState(0);

  console.log("count =>", count);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={<Portfiolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
