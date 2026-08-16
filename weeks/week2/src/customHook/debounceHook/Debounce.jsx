import React,{useRef} from 'react'
  
function useDebounce(data){
    const currentSearch = useRef();

    const functions = ()=>{
    clearTimeout(currentSearch.current)
    currentSearch.current = setTimeout(data,2000)
    }

    return functions
}

function Debounce() {
  function sendDataToBackend() {
    fetch("https://amazon.com/search/abc");
  }

  const debounced = useDebounce(sendDataToBackend);
  return (
    <div>
      <input type="text" onChange={debounced} />
    </div>
  );
}

export default Debounce;

// let currentClock;

// function searchBackend(){
//     console.log('backendis calling ');
//     // fetch() calling 
//  }

//  function debouncedSearchBackend(){

//     clearTimeout(currentClock)
//    currentClock = setTimeout(searchBackend,30); //clock start 30 sec
    
//  }

//  debouncedSearchBackend();
//  debouncedSearchBackend();
//  debouncedSearchBackend();
//  debouncedSearchBackend();
//  debouncedSearchBackend();

