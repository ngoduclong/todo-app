import React, { useState } from 'react';

const Task = ({ task, index, completeTask, removeTask, updateTask, addTask }) =>{
    const [input, setInput] = useState(task.title);
    const handleInput = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    }
  return (
      <div
          className="Task" 
          style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
          <input className="title" type={task.edit ? 'input' : 'button'} onSubmit={handleSubmit} onChange={handleInput} onClick={() =>completeTask(index)} value={input} /> 
          <button className="btn" onClick={() =>updateTask(index)}>Edit</button>
          <button className="btn" style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
      </div>
  );
}
export default Task;