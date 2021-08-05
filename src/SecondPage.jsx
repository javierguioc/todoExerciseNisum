import React, { useEffect, useContext } from "react";

import ToDoContext from "./context/ToDoContext";

const SecondPage = (props) => {
  const { ToDoList, deleteTodo } = useContext(ToDoContext);

  return (
    <>
      <h1>Lista de tareas!</h1>
      <div className="list-group h-100">
        {ToDoList.map((todo, index) => {
          return (
            <a
              href="#!"
              className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
              onClick={() => deleteTodo(todo)}
            >
              {index + 1}) {todo}
            </a>
          );
        })}

        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            props.history.push("/firstPage");
          }}
        >
          Regresar
        </button>
      </div>
    </>
  );
};

export default SecondPage;
