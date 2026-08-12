
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import UseRef from "./useRef/UseRef";
import Clock from "./useRef/Clock"
import RollingUp from "./rollingUp/RollingUp";
import PropDrilling from "./rollingUp/PropDrilling";

function App() {
  return (
    <div>
      <UseRef />
      <br />
      <Clock />
      <br />
      <RollingUp />
      <br />
      <PropDrilling />
      <br />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}


export default App;
