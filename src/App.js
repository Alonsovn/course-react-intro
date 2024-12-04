import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: "Learn React", completed: true },
  { text: "Learn components", completed: false },
  { text: "Practice", completed: false },
  { text: "Run the project", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={10} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
