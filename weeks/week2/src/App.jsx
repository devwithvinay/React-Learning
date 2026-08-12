
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import UseRef from "./useRef/UseRef";
import Clock from "./useRef/Clock"
import RollingUp from "./rollingUp/RollingUp";

function App() {
  return (
    <div>
      <UseRef />
      <br />
      <Clock />
      <br />
      <RollingUp />
      <br/>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}


export default App;
