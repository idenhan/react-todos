import React, { useState } from "react";
import List from "./components/List";
import ListContextProvier from "./context/ListContext";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";

const App = () => {
  return (
    <ListContextProvier>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <List />
          </div>
        </div>
      </div>
    </ListContextProvier>
  );
};

export default App;
