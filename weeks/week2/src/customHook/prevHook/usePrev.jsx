import React,{useState , useRef ,useEffect} from "react"

// it takes the value 
function usePrev(value){
    const ref = useRef() // store it but not rendered 

    useEffect(()=>{
        ref.current = value // 1st undefined then 2nd click its 0 
    },[value]) // after 1st render render again when value change/update
    return ref.current; // store prev render effect

}
export default usePrev;