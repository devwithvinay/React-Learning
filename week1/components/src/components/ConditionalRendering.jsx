import React,{useState} from "react"

function ConditionalRendering (){
    const [isLogin , setIsLogin] = useState(false)

    function loginHandle(){
        setIsLogin(!isLogin)
    }


    return (
   <div>
    <div>
        {isLogin ? (<div><p>Welcome Vinay</p>
        <button onClick={loginHandle}>Logout</button></div>):(<div>
            <p>Login Please</p>
            <button onClick={loginHandle}>Login</button>
        </div>)}
    </div>
   </div>
    );
}

function OnlineStatus(){
    const [online , setOnline] = useState(false)
function onlineHandle(){
    setOnline(!online)
}

    return (
      <div>
        {online ? (
          <div>
            <h2>Online✅</h2>
            <button onClick={onlineHandle}>Offline</button>
          </div>
        ) : (
          <div>
            <h2>Offline❎</h2>
            <button onClick={onlineHandle}>Online</button>
          </div>
        )}
      </div>
    );
}

export { ConditionalRendering, OnlineStatus };