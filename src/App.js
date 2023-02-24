// import logo from './logo.svg';
// import './App.css';
// import About from './components/About'; 
import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';

import Textforms from './components/Textforms';

// let nam = "jyotika"
function App() {
<<<<<<< Updated upstream
  return (
    // JSX
    <>
     
      <Navbar title="1" aboutText="About TextUtils"/>

=======
  const [mode, setMode] = useState('light');    //tells whether dark mode is enable or not
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const togleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#140258';
      showAlert("Dark Mode has been Enabled","Success")
    }
    else {
      
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light Mode has been Enabled","Success")
    }
  }
    
    return (
      // JSX 
      <>
      
      <Navbar title="TextUtils" aboutText="About" mode={mode} togleMode={togleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
              
    
     <Textforms showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode}  />
          
      
      {/* <About/> */}
      </div>
   
>>>>>>> Stashed changes
    </>
  );
}


export default App; 