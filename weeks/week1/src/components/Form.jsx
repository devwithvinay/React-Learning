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

/*

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Form(){
  const [form , setForm] = useState({name:"" , email:"" , password:""})

  function submitHandler(event){
    event.preventDefault()
    console.log(form)
  }
  function changeHandler(event){
  const {name , value} = event.target

  setForm(prev=>({
    ...prev , [name]:value
  }))

  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHandler}
          placeholder="Enter your Name"
           required
        />

        <br />

        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="Enter your email"
          onChange={changeHandler}
          required
        />

        <br />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={changeHandler}
          placeholder="Enter your Password"
          required
        
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

*/
