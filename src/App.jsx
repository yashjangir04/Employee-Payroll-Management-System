import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Payroll from "./pages/Payroll";
import { Route,Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/employees" element={<Employees/>} />
      <Route path="/attendance" element={<Attendance/>} />
      <Route path="/payroll" element={<Payroll/>} />
    </Routes>
    </>
  );
}

export default App;
