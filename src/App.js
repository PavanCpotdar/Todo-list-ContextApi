// import './App.css';
import { useContext,useReducer } from 'react';
import TodosContext from "./context"
import todoReducer from "./reducer"
import TodoList from "./components/TodoList"
import TodoForm from './components/TodoForm';

function App() {
  const initialState = useContext(TodosContext);
  const [state, dispatch]=useReducer(todoReducer,initialState)
  return (
   <TodosContext.Provider value={{state, dispatch}}>
     <TodoForm/>
     <TodoList />
   </TodosContext.Provider>
   
  );
} 

export default App;
