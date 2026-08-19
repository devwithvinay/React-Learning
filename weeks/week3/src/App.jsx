import { useState, useEffect, useRef, useContext,  } from "react";
import {BrowserRouter , Outlet, Route , Routes  , Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <AppRoute/>
    </div>
  );
}

function AppRoute() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Landing />} />
            <Route path="/jee/class11" element={<Class11Jee />} />
            <Route path="/jee/class12" element={<Class12Jee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout(){
  return (
    <div style={{height:"100vh"}}>
      <Link to={"/"}>Home</Link> |
      <Link to={"/jee/class11"}>Class 11</Link> |
      <Link to={"/jee/class12"}>Class 12</Link>
      <div style={{height:"90vh"}}>
        <Outlet/>
      </div>

    </div>
  )
}

function Landing(){
  return(
    <div>
      Welcome to Physics Wallah
    </div>
  )
}

function Class11Jee (){
  return(
    <div>
      Class 11 jee program 
    </div>
  )
}

function Class12Jee(){
  const navigate = useNavigate()

  function redirectHandler(){
    navigate("/")
  }
  
  return(
    <div>
      Class 12 jee program
    <button onClick={redirectHandler}>Go to Home</button>  
    </div>
  )
}  



export default App;
