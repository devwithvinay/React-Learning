
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import UseRef from "./useRef/UseRef";
import Clock from "./useRef/Clock"

function App() {
  return (
    <div>
      <UseRef />
      <br />
      <Clock/>
      <br/>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}


export default App;
