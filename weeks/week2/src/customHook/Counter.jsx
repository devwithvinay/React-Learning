import React,{useState} from 'react'

// Custom Hook 
function useCounter(){
    const [count, setCount] = useState(0);

     function increaseCount() {
       setCount((c) => c + 1);
     }

     return {
        count : count ,
        increaseCount : increaseCount
     }
}

function Counter() {
  return (
    <div>
      <Counting />
      <Counting />
      <Counting />
      <Counting />
    </div>
  );
}

function Counting(){
  const { count, increaseCount } = useCounter(0);
  return (
    <div>
      <button onClick={increaseCount}>Increase {count} </button>
    </div>
  );

}

export default Counter
