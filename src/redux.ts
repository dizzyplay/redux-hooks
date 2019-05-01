import {createStore} from "redux"
import uuid from 'uuid/v4'
import {Todo, TodoActionTypes, TodoState, ADD_TODO, TOGGLE_TODO, DELETE_TODO} from "./types";

const initialState:TodoState ={
  todos:[
    {
      id:uuid(),
      name:'Go to the gym',
      complete:false
    },
    {
      id:uuid(),
      name:'Do laundry',
      complete:true
    },
  ]
};
export const store = createStore(
  reducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state=initialState,action:TodoActionTypes):TodoState{
  switch (action.type) {
    case ADD_TODO:
      return {...state,
        todos:[...state.todos,action.payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos:state.todos.map(todo=>(todo.id===action.payload) ? {...todo, complete:!todo.complete}: todo)
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo=>todo.id !== action.payload)
      }
    default:
      return state;
  }
}

export const addTodoAction =(todo:Todo):TodoActionTypes=>({
  type:'ADD_TODO',
  payload: todo
})

export const toggleTodoAction = (todoId:string):TodoActionTypes =>({
  type:'TOGGLE_TODO',
  payload:todoId
})

export const deleteTodoAction= (todoId:string):TodoActionTypes =>({
  type:'DELETE_TODO',
  payload:todoId
});
