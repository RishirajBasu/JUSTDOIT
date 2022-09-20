import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
const TodoList = () => {
    const [todos, setTodos]=useState([])
    const addtodo = todo =>{
        if(!todo.text|| /^\s*$/.test(todo.text)){
            return ;
        }
            const newtodos = [todo,...todos];
            setTodos(newtodos)
        console.log(todos)
    }
    const updateTodo=(todoid, newtask)=>{
        if(!newtask.text|| /^\s*$/.test(newtask.text)){
            return ;
        }
        setTodos(prev=>prev.map(item=>(item.id===todoid? newtask:item)))
    }
    const removeTodo=(id)=>{
        const removeArr= [...todos].filter(todo=>todo.id!==id);
        setTodos(removeArr);
    }
    const completeTodo = (id) =>{
        let updatedTodos = todos.map((todo)=>{
            if(todo.id===id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos)
    }
  return (
    <div>
        <h1>Heyy, What's your plan for Today!</h1>
      <TodoForm onSubmit={addtodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList
