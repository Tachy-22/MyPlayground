import React, { useState } from "react";
import TestForm from "./TestForm";
function TestList(props) {
  const [list, setList] = useState([]);
  const addWord = (word) => {
    if (!word.text || /^\s*$/.test(word.text)) {
      return;
    }
    const newWordList = [word, ...list];
    setList(newWordList);
    console.log(newWordList);
  };
  return <TestForm onSubmit={addWord} />;
}

export default TestList;
