import React,{useState , useRef} from 'react'

function Clock() {
    const [count , setCount] = useState(1)
    const timer = useRef();

    function clockStart(){
        if(timer.current) return
     const value = setInterval(function(){
            setCount(c => c+1 )
        },1000)
        timer.current = value
    } 

    function stopClock(){
        clearInterval(timer.current)
        timer.current = null
    }
  return (
    <div>
        {count}
      <button onClick={clockStart}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default Clock;
