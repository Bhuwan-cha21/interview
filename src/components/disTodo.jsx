import {React, useState} from 'react'
import '../App.css'
export const DisTodo = ({details,isCompleted,name,index, type, completeTodo, delTodo  , editTodo}) => {


    return (
      <div className="Item"
        
      >
        <p>Todo type:{type}</p>
        <p>{details}</p>
        <span className='todohead' style={{ textDecoration: isCompleted ? "line-through" : "" }}>{name}</span><br></br>
        {isCompleted ? <button 
                   
                >Completed</button> : <button className='btn' onClick={()=>{
                    completeTodo(index)
                }}>complete</button>}
        <button onClick={() => delTodo(index)}> X </button>
        <button onClick={()  =>editTodo(index)}>Edit Todo</button>
        
      </div>
    );
  };