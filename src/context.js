import React from 'react'

const TodosContext = React.createContext({
    todos:[
        {id:1,text:"wake up",done:false},
        {id:2,text:"jogging",done:false},
        {id:3,text:"Exercise",done:false},
    ],
    currentTodo:{}
});

export default TodosContext; 