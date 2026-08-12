import React, { useState } from "react";

function RollingUp() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function ToggleBulbState({ setBulbOn }) {
  return (
    <div>
      <button onClick={() => setBulbOn((currentState) => !currentState)}>
        Toggle Bulb
      </button>
    </div>
  );
}

export default RollingUp;


// its rolling up the state, this  is not optimal way to do because their is too much re-rendering