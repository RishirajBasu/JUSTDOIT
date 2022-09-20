import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

//   This adds refernce to input in action
    const inputRef= useRef(null)
    useEffect(()=>{
        // this focus as the page reloads on the input element referred by the inputref 
        inputRef.current.focus()
    })
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000), // the number 10000 determines the limit uptill which the new numbers are to be generated
      text: input,
    });
    setInput("");
    console.log("handle submit clicked");
  };
  return (
    <form className="todo-form">
    <>
      <input
        type="text"
        placeholder=" Add Tasks "
        className="todo-input"
        name="text"
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button" onClick={handleSubmit}>
        Add Task
      </button>
      </>
    </form>
  );
};

export default TodoForm;
