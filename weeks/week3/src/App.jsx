import { useState, useEffect, useRef, useContext, createContext } from "react";
import { BrowserRouter, Outlet, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <UseDebounce/>
    </div>)
}

function useDebounce(data){
  const currentSearch  = useRef()

  const Search = ()=> {
    clearTimeout(currentSearch.current)
    currentSearch.current = setTimeout(data , 200)
  }
  return Search
}

function UseDebounce(){

  const debounce = useDebounce(sendDataToBackend)

  function sendDataToBackend(){
    fetch("https://localhost3000")
  }

  return(
    <div>
      <input type="text" onChange={debounce}/>
    </div>
  )
}


export default App;
