import React from 'react'
import { useState } from 'react';




export default function Form(props) {

  const handleUpChange = (e)=> {

    setText(e.target.value);
  }

  const handleUpClick = ()=> {
    
    let newText  = text.toUpperCase();
    setText(newText);

    props.showAlert("converted to UpperCase","success ");
    
  }

  const handleLowClick = ()=> {
    
    let newText2  = text.toLowerCase();
    setText(newText2);
    
  }

  const handleClearClick = ()=> {
    
    let newText2 ='';
    setText(newText2);
     
  }

  const handleCopy= () => {
    let textarea = document.getElementById("exampleFormControlTextarea1")
    textarea.select();
    
    navigator.clipboard.writeText(textarea.value);
  }


  const handleExtraSpaces= () => {

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState('');
  return (
    <div className={`d-flex flex-column align-items-center text-${props.mode==='dark' ?'light':'dark' }`}  >
       <div className=' w-70'> 

      <h1 className="mt-5 ">{props.heading}</h1>
      <div className="my-5">
      <textarea  className="  mps-3 form-control" onChange={handleUpChange} style={{backgroundColor: props.mode==='dark'?'#85aff2':'white', color:props.mode==='dark'?'white':'black'} }      value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div> 
      
      <div className='d-flex flex-column gap-2 '>
      <button disabled={text.length==0}   className="btn btn-primary" onClick={handleUpClick} > Convert to Uppercase </button>
      <button  disabled={text.length==0} className="btn btn-primary" onClick={handleLowClick} > Convert to Lowercase </button>

      <button  disabled={text.length==0} className="btn btn-primary" onClick={handleClearClick} > Clear Text </button>

      <button  disabled={text.length==0} className='btn btn-primary' onClick={handleCopy}> Copy </button>

      <button  disabled={text.length==0} className='btn btn-primary' onClick={handleExtraSpaces}> Remove Extra Spaces </button>
      </div>
      </div>


      <div className="container my-3 w-70">

            <h1>Your text summary </h1>
            <p> {text.split(/\s+/).filter((element)=> {return element.length!=0}).length } words and {text.length} characters </p>

            {/* text.split ek array dega jisme no of words hoge  */}
          
            <p> Duration of Reading is {0.008 * text.split(" ").filter((element)=> {return element.length!=0}).length} minutes </p>

            <p><u><b>Preview</b> </u></p> 
            <p>{text.length>0?text: 'nothing to preview'}</p>

            
      </div>
    </div>
    
  )
}

