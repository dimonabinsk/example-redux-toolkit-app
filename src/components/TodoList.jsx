import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
