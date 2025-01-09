import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  addTodo,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}

        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

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

export { AppUI };
