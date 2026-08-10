import React from 'react'
import{ useState} from "react"

function EventHandling()  {


    function buttonHandle() {
      alert("Button Clicked");
    }

    const [input , setInput] = useState("")

    function handleChange(e) {
      setInput(e.target.value);
    }

  return (
    <div>
      <button onClick={buttonHandle}>Click Me</button>
      <input onChange={handleChange} type="text" placeholder='write Something'/>
      <p>{input}</p>
    </div>
  )
}


export default EventHandling
