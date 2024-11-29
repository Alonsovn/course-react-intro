import React from "react";
import "./App.css";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: "Learn React", completed: true },
  { text: "Learn components", completed: true },
  { text: "Practice", completed: true },
  { text: "Run the project", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={10} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
