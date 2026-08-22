import { useState, useEffect, useRef, useContext, createContext } from "react";
import { BrowserRouter, Outlet, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Context from "./recoil/Context";
import {RecoilRoot} from "recoil";
import Recoil from "./recoil/Recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Recoil />
      </RecoilRoot>
    </div>
  );
}




export default App;
