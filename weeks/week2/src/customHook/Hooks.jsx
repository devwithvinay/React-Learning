import React, {useState , useEffect} from "react"
import useFetch from "./useFetch"
import usePostTitle from "./usePostTitle"

function Hooks(){
    const [currentPost, setCurrentPost] = useState(1);
   
 
    const {finalData , loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" +currentPost , 10) // yaha se time control

     if (loading) {
       return <div> Loading... </div>;
     }


    return <div>
        <button onClick={()=>setCurrentPost(1)}>Button #1</button>
        <button onClick={()=>setCurrentPost(2)}>Button #2</button>
        <button onClick={()=>setCurrentPost(3)}>Button #3</button>

        {JSON.stringify(finalData)}
       

        // custom hook :- useFetch hook

    </div>
}

export default Hooks;