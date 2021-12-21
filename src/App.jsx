import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header"
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import './App.css';

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

  /* useEffect executa o bloco sempre que uma variavel muda */
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    /* faz um map em cada task e se o id da task atual for igual
    ao taskId irá retornar tudo que ta na task e o completed dele
    vai ser igual ao completed que era anteriormente, se não for,
    irá retornar a task normal */
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task; 
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    /* tudo que está em tasks e uma nova task */
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header/>
          <Route 
            path="/" 
            exact 
            render={() => (
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks 
                  tasks={tasks} 
                  handleTaskClick={handleTaskClick} 
                  handleTaskDeletion={handleTaskDeletion}
                /> 
              </>
            )}
          />
          <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;