import React from "react";
import Header from "../components/Header";
import List from "../components/List";
import TaskForm from "../components/TaskForm";

import "../styles/Todos.css";

const Todos = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main">
        <TaskForm />
        <List />
      </div>
    </div>
  );
};

export default Todos;
