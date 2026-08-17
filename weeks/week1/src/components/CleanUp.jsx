import React,{useState , useEffect} from "react"

const CleanUp = () => {

    const [seconds , setSeconds] = useState(1)

    useEffect(function(){
      const Timer = setInterval(function(){
            setSeconds( second => second +1  )
        },1000)

        return function(){
            clearInterval(Timer)
        }

    },[])


  return (
    <div>
     Timelapse {seconds}
    </div>
  )
}

export default CleanUp
