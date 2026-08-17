## props 

=> props are the properties where we can pass from parent componenets to the child through {props}

 yaha par aApp parent pass kar rha hai vinay to the child Greeting ko ({name}) ke jariye or usko wo use kar rha hai 

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
      <h1>Hiii there {name}</h1>
    </div>
  )
}
export default App ;

output => HII there Vinay

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
}

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

## example 2 

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


