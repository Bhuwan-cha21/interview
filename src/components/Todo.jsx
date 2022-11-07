import {  useState } from "react";
import { DisTodo } from "./DisTodo";
import InputTodo from "./InputTodo";
import '../App.css'

export default function App() {
  const [todos, setTodos] = useState([]);
  const [edit , setEdit] = useState([])
  const[editIndex , setEditIndex] = useState(null)
  
  
  function delTodo(index){   
    const newList = todos.splice(index,1)
   
    setTodos(newList)
  }

  function addTodo(todo) {
    if (!todo.head){
         alert('Enter data')
    }else{
        setTodos([...todos,todo])
        
    }
  }
 function editTodo(index){
  const toEdit =todos[index]
  setEdit(toEdit)
  setEditIndex(index)
 
 }
  function completeTodo(index){
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    
  }
 function handelEdit(index,value){
  if(!value.head){
    alert('Enter data')
  }else{
    setTodos(prev => prev.map(item => (item.id === index ? item : value)));
    setEdit('')
 }
 }
   
 

  return(
    <div className='Container'>
      
        <div className='Todo'>
        <div className='form-container'>
         <h1 className='form-title'>Add Todo</h1>
         {edit.head ? <InputTodo edit={edit} editIndex={editIndex} editTodo={handelEdit}/> : <InputTodo addTodo={addTodo}   />}
            
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
                        editTodo = {editTodo}
                        
                       
                 
                 />
              )
            })
          }
         </div>
  </div>
  )
}