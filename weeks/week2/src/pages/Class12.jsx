import React from 'react'
import { useNavigate } from 'react-router-dom'

const Class12 = () => {
  const navigate = useNavigate() ;

  function redirectButton() {
    navigate("/");
  }

  return (
    <div>
      This is neet 12th Program
      <button onClick={redirectButton}>Go to Home Page</button>
    </div>
  )
}



export default Class12
