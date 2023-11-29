import React, { useState } from "react";

function TestForm(props) {
  const [inputText, setInputText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random * 10000),
      text: inputText,
    });
    setInputText("");
  };
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        value={inputText}
        onChange={handleChange}
        className=" w-3/4 border rounded-xl solid border-gray-300"
      ></input>
      <button className="border solid border-blue-300 hover:shadow-xl border-spacing-2 bg-gray-200 w-20 rounded-xl">
        Add
      </button>
    </form>
  );
}

export default TestForm;
