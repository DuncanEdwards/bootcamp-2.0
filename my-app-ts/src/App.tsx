import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AlertStack } from "./components/AlertStack/AlertStack";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlertStack
          alerts={[
            { message: "My error alert", type: "error" },
            { message: "My info alert" },
            { message: "My warning alert", type: "warning" },
          ]}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (TypeScript)
        </a>
      </header>
    </div>
  );
}

export default App;
