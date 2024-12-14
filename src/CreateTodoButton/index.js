import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={props.addTodo}>
      +
    </button>
  );
}

export { CreateTodoButton };
