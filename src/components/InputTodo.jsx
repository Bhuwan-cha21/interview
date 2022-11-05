import {React , useState} from "react";

const InputTodo = (props) =>{
  const[todo,setTodo] = useState(
      {
        head:"",
        details:"",
        type:"",
        isCompleted:false
     }
   )
   
 const type = ['Physical','Study', 'Family', 'Work']
 function changeHandler(e){
    setTodo({...todo, [ e.target.name]:e.target.value})
 }
 
 function submitHandler(e){
  e.preventDefault();
  props.addTodo(todo)
 }
  return(
    <form className='form'>
    <input type="text" name="head"  className='input-field' placeholder='Todo HeadLine'  onChange={changeHandler} />
    <input type="text"  name = "details"className="input-field" placeholder="Todo Details" onChange={changeHandler} ></input>
    <select name="type" onChange={changeHandler} >

          <option>Please choose one option</option>
          {type.map((option, index) => {
              return <option key={index} >
                  {option}
              </option>
          })}
      </select>
    <button className='btn' onClick={submitHandler}>Add</button>
  </form>
  )
}
export default InputTodo