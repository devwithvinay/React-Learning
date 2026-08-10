import React from 'react'
import { Outlet,Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/neet/class11"}> | Class 11</Link>
      <Link to={"/neet/class12"}> | Class 12</Link>
      <div style={{height:"90vh"}}>
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout
