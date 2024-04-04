import React , { useState } from 'react'
import  './Box.css'

function Box(props) {
    let [text,setText]=useState("");
    function uppercaseto()
    {
        setText(text.toUpperCase());
    }
    function lowercaseto()
    {
        setText(text.toLowerCase());
    }
    function handleonchange(event)
    {
        setText(event.target.value);
    }
    function clear()
    {
        setText('');
    }
    function removespace(){
        setText(text.replace(/\s+/g, ' ').trim());

    }
    
  return (
    <>
    <h6>Enter text</h6>
    <textarea  className='boxtext' style={props.style} value={text} onChange={handleonchange}  ></textarea><br />
    <div>
    <button onClick={uppercaseto} >to Upper</button> 
    <button onClick={lowercaseto}>to lower</button> 
    <button onClick={clear}>clear</button>
    <button onClick={removespace}>Remove extra space</button></div>
    
    
    <h4>your text summary</h4>
    <p>Words: {text.split(/\s+/).filter(word => word.trim() !== '').length} Total Length: {text.length}</p>
    <h4>Preview</h4>
    <p>{text}</p>

    
 
     </>

    )
}

export default Box