import React, { useContext, useState } from "react";
import { ListContext } from "../context/ListContext";

const TaskForm = () => {
  const { addTask } = useContext(ListContext);

  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    setTitle(e.target.value);
    console.log(title);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add Task"
        required
        onChnage={handleChange}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button type="submit" className="btn clean-btn">
          Clean
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
