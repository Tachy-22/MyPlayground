import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
function TodoEdit({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} submitUpdate={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? "todo-row complete rounded-lg flex justify-between p-2 border solid w-full"
          : "todo-row flex border text-white bg-blue-700  rounded-lg solid w-full p-2 justify-between"
      }
      key={index}
    >
      <div
        className=" w-full "
        key={todo.id}
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className="flex space-x-3 items-center ">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default TodoEdit;
