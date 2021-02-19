import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";

const Task = ({ task }) => {
  const { removeTask, findTask } = useContext(ListContext);

  return (
    <div>
      <li className="list-item">
        <span>{task.title}</span>
        <div>
          <button
            className="btn-delete task-btn"
            onClick={() => removeTask(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            className="btn-edit task-btn"
            onClick={() => findTask(task.id)}
          >
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
