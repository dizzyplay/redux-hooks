import React, {useState} from 'react';
// @ts-ignore
import {useDispatch} from 'react-redux'
import {addTodoAction} from "../redux";
import {Todo} from "../types";
import uuid from 'uuid/v4'

const TodoInput = () => {
  const todo = useInput('')
  const dispatch = useDispatch()
  const addTodo = (todo:Todo)=>dispatch(addTodoAction(todo))
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(todo.value.trim()==='')return null
    addTodo({
      id:uuid(),
      name:todo.value,
      complete:false
    })
    todo.setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={'form-div'}>
        <input type="text" name={'todo'} placeholder={'Add a todo'} value={todo.value} onChange={todo.onChange} />
        <button type="submit"> Add todo</button>
      </div>
    </form>
  );
};

const useInput = (v:string)=>{
  const[value ,setValue] = useState(v)
  const handleChange= (e:any)=>{
    setValue(e.target.value)
  };
  return {value, onChange:handleChange, setValue}
}

export default TodoInput;
