import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Alert } from "./components/Alert/Alert";
// import { useAlertGenerator } from "./hooks/useAlertGenerator";

function App() {
  // const [alerts, removeAlert] = useAlertGenerator();
  // console.log("alerts", alerts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alert message="This is my message" />
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
