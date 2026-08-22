import React,{useState} from 'react'
import { counterAtom } from '../store/atoms/counter';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function Recoil() {
  return (
    <div>
      <Counter/>
    </div>
  )
}


function Counter(){ 
   return (
    <div>
      <CurrentCounter  />
      <Increase  />
      <Decrease  />
    </div>
  );
}

function CurrentCounter() {

 const count = useRecoilValue(counterAtom)

  return <div>{count}</div>;
}

function Increase() {

  const setCount = useSetRecoilState(counterAtom)

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
}

function Decrease() {

  const setCount = useSetRecoilState(counterAtom)

  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}



export default Recoil ;