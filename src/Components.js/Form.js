import React,{useRef} from 'react'
import Card from './Card'
import classes from './Form.module.css'

function Form() {

 const nameRef=useRef();
 const ageRef=useRef();

 const onSubmit=(event)=>{
     event.preventDefault();
 
   const name=( nameRef.current.value);
  const age=(ageRef.current.value);
  
 console.log (name,age)
    nameRef.current.value=('')
    ageRef.current.value=('');
 }
    return (
        <div>
        
    <Card className={classes.input}>
    <form  >
           <label>username</label>
           <input type="text" ref={nameRef}/><br/>
           <label>age</label>
           <input type="text" ref={ageRef}/><br/>
           <button type="submit"  onClick={onSubmit}>submit </button>
         
           </form>
        </Card>
        </div>
        
        
        
        
    )
}

export default Form
