import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";
import Task from "./Task";

const List = () => {
  const { tasks } = useContext(ListContext);

  return (
    <div>
      <ul className="list">
        {tasks.map(task => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
};

export default List;
