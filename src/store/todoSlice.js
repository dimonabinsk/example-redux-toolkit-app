import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id: "1",
    text: "Learn JS",
    completed: false,
  },
  {
    id: "2",
    text: "Learn React",
    completed: false,
  },
  {
    id: "3",
    text: "Learn Redux",
    completed: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: initialState,
  },
  reducers: {
    addTodo(state, action) {
      // console.log(state);
      // console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
