import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";

export const ListContext = createContext();

const ListContextProvier = props => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const findTask = id => {
    const item = tasks.find(task => task.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));

    console.log(newTasks);

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <ListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findTask,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvier;
