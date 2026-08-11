import React,{useRef} from 'react'


function UseRef() {
    const inputRef = useRef();

    function handleFocus(){
        inputRef.current.focus()
    }

  return (
    <div>
      Sign Up 
      <input ref={inputRef} type={"text"} placeholder='First Name' />
      <input type={"text"} placeholder='Last Name' />
      <button onClick={handleFocus}>Submit</button>
    </div>
  )
}

export default UseRef;
