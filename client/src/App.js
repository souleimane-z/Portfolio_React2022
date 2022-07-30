import React from "react";
import { ToastContainer } from "react-toastify";
import Components from "./Components/Components";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Components />
    </div>
  );
}

export default App;
