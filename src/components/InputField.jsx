import React from "react";

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <div>
      <label>
        <input value={text} onChange={(e) => handleInput(e.target.value)} />
        <button onClick={handleSubmit}>Add Todos</button>
      </label>
    </div>
  );
};

export default InputField;
