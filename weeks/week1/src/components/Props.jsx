import React from "react";

function Props(){
    return(
        <div>
           <Greeting name="Vinay" role="Developer"/>
        </div>
    )
}

function Greeting ({name,role}){
    return(
        <div>
            <h1>hello{name}</h1>
            <p>{role}</p>
        </div>
    )
}

export default Props;