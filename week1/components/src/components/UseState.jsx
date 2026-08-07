import React from 'react'
import { useState } from 'react'

function UseState  () {
    const [following , setFollowing] = useState(false)

    function buttonHandle(){
        setFollowing(!following)
    }
  return (
    <div>
      <button
        style={{
          backgroundColor: following ? "#e5e7eb" : "#aaaaaa",
          color: following ? "#222" : "white",
          border: "none",
          padding: "8px 20px",
          borderRadius: 8,
        }}
        onClick={buttonHandle}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default UseState;
