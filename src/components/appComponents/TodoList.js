import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoEdit from "./TodoEdit";

function TodoList(props) {
  //Create the State and the useState method is used. Square brackets are used since its an array that is to be generated
  const [todos, setTodos] = useState([]);
  //-------------------------------------------
  // An arrow functon {addTodo} is created that would monitor the type of input as well as store the todos
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    // The todos are stored together with the new todo added in an array and then they are stored in a variable {newTodos}
    const newTodos = [todo, ...todos];
    // Then the todo is set to newTodos using the setTodo function
    setTodos(newTodos);
    console.log(newTodos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  // //--------------------------------------------------------------------------------------
  return (
    <div className="space-y-6">
      <TodoForm
        // The addTodo function is equated to a prop called {onSubmit}
        onSubmit={addTodo}
      />
      <TodoEdit
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
