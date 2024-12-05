import { TodoIcon } from "./TodoIcon";
import React from "react";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
}

export { DeleteIcon };
