import React , {useState , useEffect} from "react"

function useFetch(url , retry){
  const [finalData , setFinalData] = useState({})
  const [loading , setLoading] = useState(true)
  console.log(url)

  
  async function getDetails(){
    setLoading(true)
    const response = await fetch(url)
    const json = await response.json()

    setFinalData(json)
    setLoading(false)
  }

  useEffect(()=>{
    getDetails()
  },[url])

  useEffect(()=>{
    const timer = setInterval(getDetails , retry*1000)

     return function (){
      clearInterval(timer)
     }
  },[])


  return {finalData , loading}

}

export default useFetch;