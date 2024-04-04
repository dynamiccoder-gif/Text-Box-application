import React from 'react'
import { useState } from 'react'

 
function Count() { 
    let [a,counter]=useState(0);
    let [color,setColor]=useState(false);

function increase()
{
  counter(a+1);
}
function change()
{
    setColor(color === false ? true : false);
}
   
  return (
    <>
    <p>count={a}</p>
    <button onClick={increase}>Increase Count</button>
    <p onClick={change} style={{color:'red'}}>
   {
    color ?<i class="fa-regular fa-heart"></i> :<i class="fa-solid fa-heart"></i>
   }
    </p>
    </>
    
  )
}

export default Count