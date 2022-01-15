import React, {useContext} from 'react'
import TodosContext from '../context'
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"

const TodoList =()=>{
    const {state, dispatch}=useContext(TodosContext);
    console.log(state);
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 '>
                    <h2 className='text-center mr-5'> Todo list </h2>
                    { state.todos.map((todo)=>{
                       return <div className='border row mx-2 m-2 align-items-center d-flex  flex-direction container' key={todo.id}>
                            <ul className='list-group te' style={{color:"white"}}> 
                                <li
                                
                                 className='list-group-item'
                                onDoubleClick={()=>
                                    dispatch({type:"TOGGLE_TODO",payload:todo})}
                                style={{textDecoration: `${!todo.done ? "none" :"line-through"}`,
                                backgroundColor:"#00ffcc",
                                cursor:"pointer",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                            }}
                                >
                                    {todo.text}
                                    </li>
                                   
                            </ul>
                            <span className='btn btn-sm border border-primary   float-right'
                            onClick={()=>dispatch({type:"SET_CURRENT_TODO",payload:todo})}
                            >
                                        <EditOutlined className="text-warning d-flex"/>
                                    </span>
                                    <span className='btn btn-sm float-right d-flex' 
                                    onClick={()=>dispatch({type: "DELETE_TODO", payload:todo})}
                                    >
                                        <DeleteOutlined className="text-danger"/>
                                    </span>
                            
                        </div>
                    })}
                </div>
            </div>
         </div>
    )
}

export default TodoList