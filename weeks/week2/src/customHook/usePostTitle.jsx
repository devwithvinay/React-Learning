import React,{useState , useEffect} from 'react'

function usePostTitle() {
  const [ post , setPost] = useState({})

  async function getpost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await response.json()

    setPost(json)
  }

  useEffect(()=>{
    getPost()
  },[])

  return (
    <div>
      {post.title}
    </div>
  )
}

export default usePostTitle;

// for Custom hooks use library likes "react swr" , "Tanstack" ..
