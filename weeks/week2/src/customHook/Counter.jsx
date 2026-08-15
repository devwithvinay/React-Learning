import React, {useState} from "react"

function Counter() {
  return (
    <div>
      <Counting />
      <br/>
      <Counting />
    </div>
  );
}

function useCounter (){
  const [ count , setCount ] = useState(0);

  function increaseCount(){
    setCount(c=>c+1)

  }
  return {
    count :count,
    increaseCount : increaseCount
  }

}

function Counting(){

  const {count , increaseCount} = useCounter()
  return <div>
    <button onClick={increaseCount}>Count:{count}</button>
  </div>
}



export default Counter
