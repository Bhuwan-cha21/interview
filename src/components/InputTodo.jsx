import {React , useState} from "react";
import '../App.css'

const InputTodo = (props) =>{
 
  const[todo,setTodo] = useState({
    head:"",
    details:"",
    type:"",
    isCompleted:false
 })

   
 const type = ['Physical','Study', 'Family', 'Work']
 function changeHandler(e){
    setTodo({...todo, [ e.target.name]:e.target.value})
 }
 function submitEdit(e){
  e.preventDefault();
  props.editTodo(props.editIndex,todo)
  setTodo({
    head:"",
    details:"",
    type:"",
    isCompleted:false
})
 }
 function submitHandler(e){
  e.preventDefault();
   setTodo({})
  props.addTodo(todo)
  setTodo({
      head:"",
      details:"",
      type:"",

  })
 }
  return(
    <form className='form'>
      { props.edit? (
            <>
              <input type="text" name="head"  className='input-field' placeholder='Todo HeadLine' value={todo.head} onChange={changeHandler} />
                          <input type="text"  name = "details"className="input-field" placeholder="Todo Details" value={todo.details}  onChange={changeHandler} ></input>
                          <select name="type" onChange={changeHandler} >
                      
                                <option>Please choose one option</option>
                                {type.map((option, index) => {
                                    return <option key={index} >
                                        {option}
                                    </option>
                                })}
                            </select>
                          <button className='btn' onClick={submitEdit}>Submit Chages</button>
            </>
      ) : (
        <>
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
        
        </>
      )}
  </form>
  )
}
export default InputTodo