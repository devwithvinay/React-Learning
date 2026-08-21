import { useState, useEffect, useRef, useContext, createContext } from "react";
import { BrowserRouter, Outlet, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Context from "./recoil/Context";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Context />
      </RecoilRoot>
    </div>
  );
}




export default App;
