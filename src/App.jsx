import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'

import About from './components/About'
import Alert from './components/Alert'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('dark');
  
  const [text, settext] = useState('enable light mode')

  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {


    setAlert({

      msg : message, 
      type: type
    })

    setTimeout(()=> {
       setAlert(null)
    },3000)
  }
  
  if( Mode==='dark'){

    document.body.style.backgroundColor='#0d2b42';

  }

  const toggleMode= () =>{

    if ( Mode ==='light'){
 
      setMode('dark')

      settext('enable light mode');

      document.body.style.backgroundColor='#0d2b42';
      showAlert("Dark mode is enabled", "success");


    }

    else {

      setMode('light')
      
      settext('enable dark mode');

      document.body.style.backgroundColor='white';

      
      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>
    <Router>
 
 <Navbar title="TextUtils"  aboutText="about TextUtils "  mode={Mode} togglemode={toggleMode}  text={text}/> 
 <Alert alert={alert}/> 

<div>
 <Switch>
          <Route exact path="/about">
            <About mode={Mode} />
          </Route>
          <Route exact path="/">
          <Form  showAlert={showAlert} heading="TextUtils- Word Counter, Character Counter"  mode={Mode}/> 
          
          </Route>
        </Switch>
        </div>
 

      
 
 {/* <About mode={Mode}/> */}


 </Router>
    </>
  )
}

export default App

