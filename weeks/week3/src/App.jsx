import { useState, useEffect, useRef, useContext, u } from "react";
import "./App.css";

function App() {
  return (
    <div>
    <CleanUp/>
    </div>
    )
}

function CleanUp(){
  const [seconds , setSeconds] = useState(0)

  useEffect(()=>{
  const timer = setInterval(clickHandle , 1000)

  return function (){
    clearInterval(timer)
  }
  },[seconds])
   
  function clickHandle(){
    setSeconds(sec=>sec+1)
  }

  return(
    <div>
      <button onClick={clickHandle}>Seconds:{seconds}</button>
    </div>
  )
}


export default App;
