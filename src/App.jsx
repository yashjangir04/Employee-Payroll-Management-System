import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Payroll from "./pages/Payroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <Dashboard /> */}
      {/* <Payroll /> */}
      {/* <Employees/> */}
      {/* <Attendance/> */}
    </>
  );
}

export default App;
