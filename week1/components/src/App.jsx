import Props from "./components/Props.jsx";
import ProfileCard from "./components/component.jsx";
import UseState from "./components/UseState.jsx";
import EventHandling from "./components/EventHandling.jsx";
import {ConditionalRendering ,OnlineStatus} from "./components/ConditionalRendering.jsx";
import Form from "./components/Form.jsx";
import UseEffect from "./components/UseEffect.jsx";


function App() {

  const user = [
    {id:1,
     name:"Vinay",
     role:"Developer"
    },

    {
      id:2,
      name:"Manish",
      role:"Designer",
    },

    {
      id:3,
      name:"Aman",
      role:"Backend"
    },

    {
      id:4,
      name:"sumit",
      role:"Frontend"
    }
  ]

  return (
    <div>
      <Props />
      {user.map((user)=>{
        <ProfileCard key={user.id} name={user.name} role={user.role} />;
      })}
      <br />
      <EventHandling />
      <br />
      <ConditionalRendering />
      <br />
      <OnlineStatus/>
      <Form/>
      <br/>
      <UseEffect/>
    </div>
    
  );
}

export default App;
