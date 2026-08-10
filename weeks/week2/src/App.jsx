
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>           
        <AppRoutes/>       
      </BrowserRouter>
    </div>
  );
}


export default App;
