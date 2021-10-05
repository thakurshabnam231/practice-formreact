import React from 'react'
import ReactDom from 'react-dom';
import './App.css';
import Form from './Components.js/Form';
import List from './Components.js/List';

function App() {
 
  return (
    <div className="App">
   { ReactDom.createPortal(
 <Form/>,document.getElementById("portal-root"))}
 {ReactDom.createPortal(
   <List/>,document.getElementById("portal-root"))}
 
   </div> 
  
  );
  
}

export default App;
