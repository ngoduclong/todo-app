import React, { useState } from 'react';

const CreateTask = ({ addTask }, props) =>{
  const [value, setValue] = useState(props.edit ? props.edit.value : '');
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // });
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTask(value);
      setValue("");
  }
  return (
      <form onSubmit={handleSubmit}>
        <>
          <input
              type="text"
              className="input"
              value={value}
              // ref={inputRef}
              placeholder="Add a new task"
              onChange={e => setValue(e.target.value)}
          />
        </>
      </form>
  );
}
export default CreateTask;