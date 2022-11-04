import './App.css'
import {  useRef, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const todoHead = useRef(); 
  const todoDetails = useRef(); 
  

  function delTodo(index){   //deletefunction
    var newList = todos.filter((item,key) =>{
      return key !== index
    })
    setTodos(newList)
  }
  function addTodo(e) {
    e.preventDefault();
    if (todoHead.current.value.trim() != ''){
          setTodos([...todos,
            {
              todoHead:todoHead.current.value,
              todoDetails: todoDetails.current.value,
              isCompleted: false
            
          }])
          todoHead.current.value = ''
        todoDetails.current.value = ''
    }
    
  }
  function completeTodo(index){
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  function uncompleteTodo(index){
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  }
  return(
    <div className='Container'>
      
        <div className='Todo'>
        <div className='form-container'>
         <h1 className='form-title'>Add Todo</h1>
            <form className='form'>
              <input type="text"  className='input-field' placeholder='Todo HeadLine' ref={todoHead} />
              <input type="text"  className='input-field' placeholder='Todo Details' ref={todoDetails} />
              <button className='btn' onClick={addTodo}>Add</button>
            </form>
        </div>
            {todos.map((details,index) =>{
              return(
              <div className='Item'>
                <span className='todohead' style={{ textDecoration: details.isCompleted ? "line-through" : "" }}>{details.todoHead}</span>
                <p className='tododetails'>
                  
                  {details.todoDetails}
                </p>
                
                <button className='btn' onClick={()=>{
                    delTodo(index)
                }}>Delete</button>
                {details.isCompleted ? <button className='btn' onClick={()=>{
                    uncompleteTodo(index)
                }}>Complete</button> : <button className='btn' onClick={()=>{
                    completeTodo(index)
                }}>Uncomplete</button>}
                
                 
              </div>
              )
            })
          }
        

        
        </div>
  </div>
  )
}
      