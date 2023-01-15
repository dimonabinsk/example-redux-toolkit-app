import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { addTodo } from "./store/todoSlice";

function App() {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };
  // const addTodo = () => {
  //   if (text.trim().length) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: new Date().toISOString(),
  //         text,
  //         completed: false,
  //       },
  //     ]);
  //     setText("");
  //   }
  // };

  // const removeTodo = (todoId) => {
  //  setTodos(todos.filter((todo) => todo.id !== todoId));
  // };

  // const toggleTodoCompleted = (todoId) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== todoId) return todo;
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     })
  //   );
  // };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
