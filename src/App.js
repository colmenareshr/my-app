import React from "react";
import './App.css'

import List from "./components/List/List";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Primeira aula ao vivo do React</h1>
        <h2>Lista de compra</h2>
        <List />
      </header>

    </div>
  );
}

export default App;
