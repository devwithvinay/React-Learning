import React,{useState} from "react";
import ProfileCard from "./component";

function Form(){
    const [name , setName] = useState("")
    const[role , setRole] = useState("")

    const[nameSubmitted , setNameSubmitted] = useState("")
    const[roleSubmitted , setRoleSubmitted] = useState("")

    function nameHandler(e){
      setName(e.target.value);
      
    }
    function roleHandler(e){
        setRole(e.target.value)
       
    }
    function submitHandler(e){
        e.preventDefault(); // Prevents the default form submission behavior

        setNameSubmitted(name); // Update the submitted name state
        setRoleSubmitted(role); // Update the submitted role state

    }

    return (
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={name}
            onChange={nameHandler}
            placeholder="Enter Name"
          />
          <button type="submit">Submit</button>
          <br />
          <input
            type="text"
            value={role}
            onChange={roleHandler}
            placeholder="role"
          />
          <button type="submit">Submit</button>
        </form>

        <div>
          <ProfileCard name={nameSubmitted} role={roleSubmitted} /> 
        </div>
      </div>
    );
}

export default Form;    