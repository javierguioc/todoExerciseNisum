import React, { useState, useContext } from "react";

import ToDoContext from "./context/ToDoContext";

const FirstPage = (props) => {
  const { setToDo ,ToDoList} = useContext(ToDoContext);

  const [text, setText] = useState("");

  return (
    <div className="form-group">
      <h1>Ingrese su Tarea!</h1>
      <h3>Actualmente tiene {ToDoList.length} tareas</h3>

      <input
        className="form-control form-control-sm"
        type="text"
        placeholder="Ingrese su tarea!"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setToDo(text);
          setText("");
        }}
        >
      Agregar
        </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          props.history.push("/secondPage");
        }}
        >Lista</button>
    </div>
  );
};

export default FirstPage;
