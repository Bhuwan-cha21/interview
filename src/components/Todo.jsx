import {  useRef, useState } from "react";
import { DisTodo } from "./disTodo";
import '../App.css'

export default function App() {
 const[todo,newTodo] = useState(null)
  const [todos, setTodos] = useState([]);

  

  function delTodo(index){   //deletefunction
    var newList = todos.filter((item,key) =>{
      return key !== index
    })
    setTodos(newList)
  }
  function addTodo(e) {
    e.preventDefault();
    if (!todo){
         alert('Enter data')
    }else{
        setTodos([...todos,{
            todoName:todo,
            isCompleted:false
        }])
       newTodo('')
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
              <input type="text"  className='input-field' placeholder='Todo HeadLine' value={todo} onChange={(e) => newTodo(e.target.value)} />
              <button className='btn' onClick={addTodo}>Add</button>
            </form>
        </div>
            {todos.map((todo,index) =>{
              return(
                 <DisTodo 
                        name = {todo.todoName}
                        index={index}
                        delTodo={delTodo}
                        completeTodo ={completeTodo}
                        uncompleteTodo = {uncompleteTodo}
                        isCompleted = {todo.isCompleted}
                 
                 />
              )
            })
          }
        

        
        </div>
  </div>
  )
}