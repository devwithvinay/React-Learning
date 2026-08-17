import React,{useState , useEffect} from 'react'

function UseEffect(){
    const [currentTab , setCurrentTab] = useState(1)
    const [tabData , setTabData] = useState({})
    const [loading , setLoading] = useState(true)

    useEffect(function(){
        setLoading(true) // tab changing setloading true
        fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab) // then send backend request
        .then(async res =>{
            const json = await res.json();
            setTabData(json) // when get request
            setLoading(false) // loading false
        })

    },[currentTab])


  return (
    <div>
      <button onClick={()=>setCurrentTab(1)} style={{color : currentTab == 1 ?"red" : "black"}}>Tab #1</button>
      <button onClick={()=>setCurrentTab(2)} style={{color : currentTab == 2 ?  "red" : "black"}}>Tab #2</button>
      <button onClick={()=>setCurrentTab(3)} style={{color : currentTab ==3 ? "red": "black"}}>Tab #3</button>
      <button onClick={()=>setCurrentTab(4)} style={{color : currentTab == 4 ? "red" : "black"}}>Tab #4</button>
      <br/>

      {loading ? "loading...": tabData.title }
    </div>
  )
}

// jab loading ho rha ho to loading... dikhao nhi to tabData.title 

export default UseEffect


/*
import React,{useState , useEffect} from 'react'

function UseEffect(){
    const [count , setCount] = useState(1)

    function increaseCount(){
        console.log("Increase Count" + count)
        setCount((count)=>count+1)
    }
 
    useEffect(function(){
        console.log("Above Interval")
     setInterval(increaseCount, 1000);  

    },[])

    useEffect(function(){
        console.log("AnyChanges in Count I will rendered"+count)
    },[count]) //Tthis thing dependency array will do .

      return (
    <div>
      {count}
    </div>
  )
}

export default UseEffect;

*/
