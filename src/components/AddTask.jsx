import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('');

  /* lidando com a alteração que o input irá sofrer */
  /* e.target.value pega oq é escrito no input */
  const handleInputChange = (e) => {
    setInputData(e.target.value);

  };

  const handleAddTaksClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input 
        onChange={handleInputChange} 
        value={inputData}
        className="add-task-input" 
        type="text" 
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaksClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
