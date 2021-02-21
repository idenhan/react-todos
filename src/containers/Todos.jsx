import React from "react";
import TodosHeader from "../components/TodosHeader";
import List from "../components/List";
import TaskForm from "../components/TaskForm";

import "../styles/Todos.css";

const Todos = () => {
  return (
    <div className="app-wrapper">
      <TodosHeader />
      <div className="main">
        <TaskForm />
        <List />
      </div>
    </div>
  );
};

export default Todos;
