
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
            <Link to={"/"}>Home</Link>
            <Link to={"/neet/class11"}>Class 11</Link>
            <Link to={"/neet/class12"}>Class 12</Link>
        <AppRoutes/>       
      </BrowserRouter>
    </div>
  );
}


export default App;
