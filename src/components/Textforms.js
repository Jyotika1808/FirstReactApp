import React, { useState } from 'react'
import './App.css';

export default function Textforms(props) {
  const handleUpClick = () => {
    console.log("UppaerCase was clicked" + text)
    let newtxt = text.toUpperCase()
    settext(newtxt)
    props.showAlert("Converted to Upper Case!!!", "Success")

  }
  const handlelonClick = () => {

    let newtxt = text.toLowerCase()
    settext(newtxt)
    props.showAlert("Converted to Lower Case!!!", "Success")
  }

  
  
  const handleclearClick = () => {
    
    let newtxt = '';
    settext(newtxt)
    props.showAlert("Text is Cleared Successfuly!!!", "Success")
  }
  
    
     const handlefcap = () => {
    // const lower = text.toLowerCase() 
     
    let txt = text.charAt(0).toUpperCase() + text.slice(1)
    settext(txt)
    props.showAlert("First Letter is Capitalized!!!", "success")
  }

  const handlecap= () => {
    let txt = text.split(" ");
    for (let i = 0; i < txt.length; i++) {
      txt[i] = txt[i][0].toUpperCase() + txt[i].substring(1);

    }
    txt = txt.join(" ")
    settext(txt)
    props.showAlert("Text is Capitalized!!!","success")
  }

  const handleonchange = (event) => {
    console.log("On Change")
    settext(event.target.value)
  }


  const handleextraspace = () => {
    let newtxt = text.split(/[ ]+/)
    settext(newtxt.join(" "))
    props.showAlert("Extra Space has been Removed!!!", "Success")
  }



  const handlecopy = () => {
    console.log("copied")
    var text = document.getElementById("mybox")
    text.select()

    navigator.clipboard.writeText(text.value)
    props.showAlert("Text is Copied to Clipboard!!", "Success")
  }


  const [text, settext] = useState('')
  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className='mb-3'>

          <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'light grey' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows='8' />
        </div>
        <button className='primary' onClick={handleUpClick}>UPPER CASE</button>
        <button className='lc' onClick={handlelonClick}> lower case</button>
        <button className='fcap' onClick={handlefcap}>Make first letter Capital</button>
        <button className='cap' onClick={handlecap}>Capitalize Text (no extra spaces)</button>
        <button className='lc' onClick={handleclearClick}>Clear</button>
        <button className='copy' onClick={handlecopy}>Copy Text</button>
        <button className='copy' onClick={handleextraspace}>Remove Extra Spaces</button>
        {/* <button  className='cap' onClick={handleloClick}>Capitalization</button> */}

      </div>

      <div className="cont" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Time to Read : {0.008 * text.split(" ").length} = Minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to View Preview "}</p>
      </div>


    </>
  )
}
