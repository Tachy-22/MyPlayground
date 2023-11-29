import React, { useState } from "react";

function TodoForm({ submitUpdate }) {
  //-------------------------------------------------------------------------------------------------------------------------
  //set the states and link them to the usestate method they will be have string value hence the string " " in the parenthesis
  const [input, setInput] = useState("");
  //The submission event is handled in this block of code in the bellow manner:
  // 1. Prevention of auto reloading upon submission
  // 2. Creation of the object container on submission {This would hold the unique Id and input value gottrn from the text value}
  // 3. Setting input to an empty string.
  const handleSubmit = (event) => {
    // Prevents autorefresh function
    event.preventDefault();
    // The code below generates an object upon submission that stores props an these props host a unique id and input text value
    submitUpdate({
      // //gnerates a random id upon submitting and asigns the input which is gottten frm the current form value
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  //------------------------------------------------------------------------
  // create a handler for change of input value
  // 1. set the input value using the function setInput(event.target.value)
  const handleChange = (event) => {
    //set a value for the input
    setInput(event.target.value);
  };

  //-----------------------------------------------------------
  // This returns the form
  return (
    <form
      // Set a handler function to the onSubmit property of the form
      onSubmit={handleSubmit}
    >
      <div className=" flex justify-between border accent-blue-400 solid customBorder">
        <input
          // infuse the Input value into the input state
          value={input}
          name="text"
          type="text"
          placeholder="Add a todo"
          className=" w-full bg-black text-white "
          // Set a handler function to the onChange property to be run anytime a change to the input occurs
          onChange={handleChange}
          autoFocus
        ></input>
        <button className=" solid border-blue-300 hover:shadow-x w-20">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
