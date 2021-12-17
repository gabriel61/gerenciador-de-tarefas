import React, { useState } from "react";
import './App.css';

const App = () => {

  //let message = "holy s";
  const [task, setTask] = useState([
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

  return (
    <>
      <div className="container"></div>
      {/* <button onClick={() => setMessage("hellooooooo")}>
        mudar mensagem
      </button> */}
    </>
  );
};

export default App;