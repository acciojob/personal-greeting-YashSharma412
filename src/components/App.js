
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("")
  function handleName(e){
    let myname = e.target.value;
    if(myname === ""){
      setName("")
    } else {
      setName("Hello "+myname +"!");
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        {/* <p>Enter your name:</p> */}
        <input type="text" onChange={handleName}></input>
        <p>{name}</p>
    </div>
  )
}

export default App
