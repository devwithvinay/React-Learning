import { useState, useEffect, useRef, useContext, u } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <UseEffect />
    </div>
  );
}

function UseEffect() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData  , setTabData] = useState({})
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
    .then(async res=>{
      const json =await res.json();
      setTabData(json)
      setLoading(false)

    })
      
    

  },[currentTab])

  return (
    <div>
      <button
        onClick={() => setCurrentTab(1)}
        style={{ color: currentTab == 1 ? "red" : "black" }}
      >
        Tab #1
      </button>
      <button
        onClick={() => setCurrentTab(2)}
        style={{ color: currentTab == 2 ? "red" : "black" }}
      >
        Tab #2
      </button>
      <button
        onClick={() => setCurrentTab(3)}
        style={{ color: currentTab == 3 ? "red" : "black" }}
      >
        Tab #3
      </button>
      <button
        onClick={() => setCurrentTab(4)}
        style={{ color: currentTab == 4 ? "red" : "black" }}
      >
        Tab #4
      </button>
      <p>{loading ? "Loading..." :tabData.title}</p>
    </div>
  );
}

export default App;
