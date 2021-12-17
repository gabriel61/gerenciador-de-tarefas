import React, { useState } from "react";
import './App.css';

const App = () => {

  //let message = "holy s";
  const [message, setMessage] = useState("hello world!");

  return (
    <>
      <div className="container">{message}</div>
      <button onClick={() => setMessage("hellooooooo")}>
        mudar mensagem
      </button>
    </>
  );
};

export default App;