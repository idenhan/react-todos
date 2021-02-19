import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../context/ListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(ListContext);
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add Task"
        required
        value={title}
        onChange={handleChange}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button type="submit" className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
