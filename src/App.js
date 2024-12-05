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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = () => {
    const newTodos = [...todos];
    const newTodo = { text: "New TODO", completed: false };
    newTodos.push(newTodo);

    setTodos(newTodos);
  };

  const completeTodo = (todoIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
  };

  const deleteTodo = (todoIndex) => {
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </TodoList>

      <CreateTodoButton addTodo={() => addTodo()} />
    </>
  );
}

export default App;
