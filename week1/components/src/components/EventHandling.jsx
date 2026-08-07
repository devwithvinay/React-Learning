import React from 'react'
import{ useState} from "react"

function EventHandling()  {


    function ButtonHandle(){
        alert("Button Clicked")
    }

    const [input , setInput] = useState("")

    function HandleChange(e){
     setInput(e.target.value)
     
    }

  return (
    <div>
      <button onClick={ButtonHandle}>Click Me</button>
      <input onChange={HandleChange} type="text" placeholder='write Something'/>
      <p>{input}</p>
    </div>
  )
}


export default EventHandling
