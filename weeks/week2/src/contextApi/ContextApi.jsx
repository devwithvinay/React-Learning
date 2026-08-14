import React, { createContext, useContext, useState } from "react";

const BulbContext = createContext();

function BulbProvider({ children }) {
    const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBulbOn: setBulbOn,
        }}
      >
        {children}       
      </BulbContext.Provider>
    </div>
  )

}

function ContextAPI(){
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
  
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  return (
    <div>
      <button onClick={() => setBulbOn(!bulbOn)}> Switch Bulb</button>
    </div>
  );
}

export default ContextAPI;
