import usePrev from "./usePrev";
import {useState} from "react"

function Hook(){
    const [count , setCount] = useState(0);

    const prev = usePrev(count) // count ki value as argument bhej rhe 
    // prev me previous return value store ho gya 

return(
    <div>
        <button onClick={()=>setCount(c=>c+1)}>Count : {count}</button>
        <p>Previous value is {prev}</p>       
    </div>
)
}

export default Hook;