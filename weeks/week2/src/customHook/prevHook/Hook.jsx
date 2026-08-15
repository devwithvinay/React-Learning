import usePrev from "./usePrev";
import {useState} from "react"

function Hook(){
    const [state , setState] = useState(0);

    const prev = usePrev(state)

return(
    <div>
        <button onClick={()=>setState(c=>c+1)}>Count : {state}</button>
        <p>Previous value is {prev}</p>
    </div>
)
}

export default Hook;