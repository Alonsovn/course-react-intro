import "./TodoSearch.css";
import React from "react";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log("busqueda: " + searchValue);

  return (
    <input
      placeholder="Learn React"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
