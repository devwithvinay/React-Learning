import { useState, useEffect, useRef, useContext } from "react";
import { BrowserRouter, Outlet, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}





export default App;
