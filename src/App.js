import React,{useState} from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        type : type
      })     

      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = () =>{
     if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled","success");
      //document.title = "TextUtils - Dark Mode";  for the title changing
     }
     else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
      //document.title = "TextUtils - Light Mode"; for the title changing
     }
  }


  return (
    <>
     <Router>
        <Navbar title="TextUtils 2" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
