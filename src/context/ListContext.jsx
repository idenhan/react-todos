import React, { createContext, useState } from "react";

export const ListContext = createContext();

const ListContextProvier = props => {
  const [tasks, setTasks] = useState([
    { task: "Drink Enough Water", id: 1 },
    { task: "Eat Enough Vegetables", id: 2 },
    { task: "Code to make the world better", id: 3 },
  ]);

  return (
    <ListContext.Provider value={{ tasks }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvier;
