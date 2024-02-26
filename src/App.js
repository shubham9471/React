// App.js
import React from "react";
import "./App.css";
import Quiz from "./components/quiz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Quiz</h1>
      </header>
      <main>
        <Quiz />
      </main>
      <footer>
        <p>Made with SHUBHAM</p>
      </footer>
    </div>
  );
}

export default App;
