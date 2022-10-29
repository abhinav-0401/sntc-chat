import logo from './logo.svg';
import Window from "./Window.js";
// import './App.css;
import { io } from "socket.io-client";

function App() {
  const socket = io("ws://localhost:8080/");

  return (
    <div className="App">
      <header className="App-header">
        <Window socket={socket} />       
      </header>
    </div>
  );
}

export default App;
