
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import UseRef from "./useRef/UseRef";
import Clock from "./useRef/Clock"
import RollingUp from "./rollingUp/RollingUp";
import PropDrilling from "./rollingUp/PropDrilling";
import ContextAPI from "./contextApi/ContextAPI";
import Counter from "./customHook/Counter"

function App() {
  return (
    <div>
      <Counter/>
      <br/>
      <UseRef />
      <br />
      <Clock />
      <br />
      <RollingUp />
      <br />
      <PropDrilling />
      <br />
      <ContextAPI/>
      <br/>

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}


export default App;
