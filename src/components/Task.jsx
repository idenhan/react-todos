import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";

const Task = ({ task }) => {
  const { removeTask, findTask, markTask } = useContext(ListContext);

  return (
    <div>
      <li className="list-item">
        <div
          className={
            task.completed ? "checkbox-wrapper" : "checkbox-wrapper-false"
          }
        >
          <input
            type="checkbox"
            className={task.completed ? "checkbox" : "checkbox-false"}
            id={task.id}
            onClick={() => markTask(task)}
          />
          <label
            for={task.id}
            className={
              task.completed ? "checkbox-label" : "checkbox-label-false"
            }
          >
            <span
              className={
                task.completed ? "custom-checkbox" : "custom-checkbox-false"
              }
            ></span>
            <span className={task.completed ? "complete" : ""}>
              {task.title}
            </span>
          </label>
        </div>
        <div className="task">
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
