import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from '../pages/Landing'
import Class12 from '../pages/Class12'
import Class11 from "../pages/Class11";

function AppRoutes()  {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/neet/class11" element={<Class11 />} />
        <Route path="/neet/class12" element={<Class12 />} />
      </Routes>
    </div>
  );
}

export default AppRoutes
