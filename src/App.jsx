import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {

  //let message = "holy s";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    /* tudo que está em tasks e uma nova task */
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;