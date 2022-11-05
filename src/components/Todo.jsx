import {  useState } from "react";
import { DisTodo } from "./DisTodo";
import InputTodo from "./InputTodo";
import '../App.css'

export default function App() {
  const [todos, setTodos] = useState([]);
  
  function delTodo(index){   
    var newList = todos.filter((item,key) =>{
      return key !== index
    })
    setTodos(newList)
  }

  function addTodo(todo) {
    if (!todo.head){
         alert('Enter data')
    }else{
        setTodos([...todos,todo])
        console.log(todos)
    }
  }

  function completeTodo(index){
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  return(
    <div className='Container'>
      
        <div className='Todo'>
        <div className='form-container'>
         <h1 className='form-title'>Add Todo</h1>
            <InputTodo addTodo={addTodo} />
        </div>
            {todos.map((todo,index) =>{
              return(
                 <DisTodo 
                        name = {todo.head}
                        details ={todo.details}
                        index={index}
                        delTodo={delTodo}
                        type={todo.type}
                        completeTodo ={completeTodo}
                        isCompleted = {todo.isCompleted}
                 
                 />
              )
            })
          }
         </div>
  </div>
  )
}