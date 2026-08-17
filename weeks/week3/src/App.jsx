import { useState, useEffect, useRef, useContext, u } from "react";
import "./App.css";

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
