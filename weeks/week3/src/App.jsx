import { useState, useEffect, useRef, useContext, createContext } from "react";
import { BrowserRouter, Outlet, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <UsePrev />
    </div>
  );
}

function usePrev(value){
  const ref = useRef();

  useEffect(()=>{
    ref.current = value
  },[value])

  return ref.current
}

function UsePrev(){
  const [count , setCount] = useState(0)
  const prev = usePrev(count)
  return(
    
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(c=>c+1)}>Click Me</button>
      <p>Previous value is {prev}</p>
    </div>
  )
}



export default App;
