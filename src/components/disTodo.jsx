
import '../App.css'
export const DisTodo = (props) => {
    return (
      <div className="Item"
        style={{ backgroundColor: props.completed ? "green" : "white" }}
      >
        <span className='todohead' style={{ textDecoration: props.isCompleted ? "line-through" : "" }}>{props.name}</span>
        {props.isCompleted ? <button className='btn' onClick={()=>{
                   props.uncompleteTodo(props.index)
                }}>unComplete</button> : <button className='btn' onClick={()=>{
                    props.completeTodo(props.index)
                }}>complete</button>}
        <button onClick={() => props.delTodo(props.index)}> X </button>
      </div>
    );
  };