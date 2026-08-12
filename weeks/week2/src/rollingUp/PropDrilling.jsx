import React,{useState} from 'react'

function PropDrilling() {
    const [bulbOn , setBulbOn] = useState(true)
  return (
    <div>
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  )
}

function Light({bulbOn , setBulbOn}){
    return (
      <div>
        <LightBulb bulbOn={bulbOn} />
        <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
      </div>
    );
}

function LightBulb({bulbOn}){
    return(
        <div>
         {bulbOn? "Bulb On" : "Bulb  Off"}
        </div>
    )
}

function LightSwitch({ bulbOn , setBulbOn}){
    return (
        <div>
           <button onClick={()=>setBulbOn(!bulbOn)}>Switch</button>
        </div>
    )
}

export default PropDrilling;

// This is bad when pass from parent to child to grandchild , when you have alot props passes all have to pass like that than it cause complexity , hard to maintenance .
