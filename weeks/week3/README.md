### props 

=> Props are the properties where we can pass from parent componenets to the child through {props}

 yaha par App parent pass kar rha hai vinay to the child Greeting ko ({name}) ke jariye or usko wo use kar rha hai 

function App(){
  return (
    <div>
     <Greeting name="Vinay"/>
    </div>
  )
}

function Greeting({name}){
  return (
    <div>
      <p>Hii there {name}</p>
    </div>
  )
}
export default App ;

output => Hiii there Vinay

### UseState 
useState => is a React Hook used to create and manage data (state) inside a component. When the state changes, React re-renders the component with the updated value.

import {useState} from "react"

function App(){
  const [count , setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
    <button onClick={()=>setCount(c =>c+1)}>Increase</button>
    </div>
  )
}3

export default App

### Event Handling 

Event Handling is the process of responsing when the user Click , Change  , type 

Events are => onClick={} , onChange={} , type="" , onSubmit={}

 function App(){
  
  function clickHandle (){
    alert("Vinay")
  }
  return (
    <div>
      
    <button onClick={clickHandle}>Click Me</button>
    </div>
  )
}


export default App

-- example 2 

function App() {
  return (
    <div>
      <EventHandling name="Full Name" />
    </div>
  );
}

function EventHandling({name}) {
  const [input, setInput] = useState("");

  function inputHandle(event) {
    setInput(event.target.value);
  }
  return (
    <div>
      <h2>{name}</h2>
      <input onChange={inputHandle} type="text" placeholder="Name" />
      <p>{input}</p>
     
    </div>
  );
}

export default App; 
=>>event.target.value = event ke andar jo current value hai 

=>> Always use cameCase in Event Handling 

### Condition Rendering
Showing different UI based on their condition

function App() {
  return (
    <div>
     <ConditionalRendering/>
    </div>
  )
}


 function ConditionalRendering(){
  const [isLogin , setIsLogin] = useState(true)

  function loginHandle(){
    setIsLogin(!isLogin)
  }

  return (
    <div>
      {isLogin ? (
        <div>
          <p>Welcome Back</p>
          <button onClick={loginHandle}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Login</p>
          <button onClick={loginHandle}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;

### useEffect 
useEffect is a React Hook used to perform side effects after a component renders or when specified data changes.

Examples of side effects:

Fetching API data

Setting timers

Adding event listeners

Updating the document title

--examples 1:

 function App() {

  return (
    <div>
    <UseEffect/>
    </div>
    )
}

function UseEffect (){
  const [count , setCount] = useState(0)

  useEffect(()=>{
 const timer = setInterval(clickHandle,1000)

     return function(){
      clearInterval(timer)
     }
  },[count])

  function clickHandle(){
     setCount(c=>c+1)
  }

  return(
    <div>
      <button onClick={clickHandle}>Count:{count}</button>
    </div>
  )
}

export default App;


example 2:  useEffect 

 function App() {
  return (
    <div>
    <UseEffect/>
    </div>
    )
}

 function UseEffect(){
  const [currentTab , setCurrentTab] = useState(1)
  const[tabData, setTabData] = useState({})
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
   fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
    .then(async res => {
      const json =await res.json()
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

      {loading ? "Loading..." : tabData.title}
    </div>
  );
}
export default App;


### CleanUp 

Cleanup is a function returned from useEffect that React runs to stop, remove, or clean up something created by the effect.

Why do we use cleanup?

To prevent things from continuing to run after they are no longer needed, which can cause unwanted behavior or memory/resource leaks.

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

Flow  Diagram

Component mounts
      ↓
useEffect runs ONCE
      ↓
setInterval starts
      ↓
Every 1 second
      ↓
setSeconds(sec => sec + 1)
      ↓
Component re-renders
      ↓
Interval continues
      ↓
Component unmounts
      ↓
cleanup runs
      ↓
clearInterval(timer)
      ↓
timer stops ✅
