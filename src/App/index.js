import React from "react";

import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Learn React", completed: true },
//   { text: "Learn components", completed: false },
//   { text: "Practice", completed: false },
//   { text: "Run the project", completed: false },
// ];

// localStorage.setItem("TODOS_V1", defaultTodos);
// localStorage.removeItem('TODOS_V1')

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  console.log(todos);

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

    saveTodos(newTodos);
  };

  const completeTodo = (todoIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);
  };

  const deleteTodo = (todoIndex) => {
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return (
    <>
      <AppUI
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
      />
    </>
  );
}

export default App;
