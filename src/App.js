import logo from './logo.svg';
import './App.css';
import Customcheckbox from './Components.js/Customcheckbox';
import { useEffect,useRef, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
function App() {

  
    return (
      <div className="App">

      <h1 className='heading'>Neighborgood Interest Form</h1>

      <Customcheckbox/>

      {/* <div>

      <Customcheckbox2/>
      </div> */}
    </div>
  );
}

export default App;
