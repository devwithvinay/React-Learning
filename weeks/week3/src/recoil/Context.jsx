import React,{useState} from 'react'

function Context() {
    const [count , setCount] = useState(0);
  return (
    <div>
        <Counter count={count}/>
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
    </div>
  );
}
function Counter({count}){
    return (
        <div>
           Count: {count}
        </div>
    )
}

function Increase({setCount}){

    return(
        <div>
            <button onClick={()=>setCount(c=>c+1)}>Increase</button>
        </div>
    )
}

function Decrease({ setCount }) {

  return (
    <div>
      <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
    </div>
  );
}

export default Context
