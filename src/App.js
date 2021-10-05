import React,{useState} from 'react'
import ReactDom from 'react-dom';
import './App.css';
import Form from './Components.js/Form';
import List from './Components.js/List';

function App() {
  const[addData,setAddData]=useState();
  const onAddHandler=()=>{
setAddData((prev)=>{
  return[prev]
})
  }
 
  return (
    <div className="App">
   { ReactDom.createPortal(
 <Form  addForm={onAddHandler} />,document.getElementById("portal-root"))}
 {ReactDom.createPortal(
   <List users={addData}/>,document.getElementById("portal-root"))}
 
   </div> 
  
  );
  
}

export default App;
