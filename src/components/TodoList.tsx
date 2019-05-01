import React from 'react';
// @ts-ignore
import {useDispatch,useSelector} from "react-redux"
import {Todo, TodoState} from "../types";
import {deleteTodoAction, toggleTodoAction} from "../redux";

const TodoInput = () => {
  const todos = useSelector((state:TodoState)=>state.todos);
  const dispatch = useDispatch()
  const toggle = (id:string)=>{
    dispatch(toggleTodoAction(id))
  }
  const deleteTodo = (id:string)=>{
    dispatch(deleteTodoAction(id))
  }
  return (
    <ul className={'todo-list'}>
      {todos.map((todo:Todo)=>(
        <li key={todo.id}>
        <input type={'checkbox'} checked={todo.complete} onChange={toggle.bind(null,todo.id)}/>
          <span className={todo.complete ? 'complete':''}>{todo.name}</span>
          <span className={'delete-button'} onClick={deleteTodo.bind(null,todo.id)}>X</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoInput;
