import React from "react";

const TaskForm = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add Task"
        required
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
