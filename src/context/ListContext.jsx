import React, { createContext, useState } from "react";

export const ListContext = createContext();

const ListContextProvier = props => {
  const [tasks, setTasks] = useState([
    { title: "Drink Enough Water", id: 1 },
    { title: "Eat Enough Vegetables", id: 2 },
    { title: "Code to make the world better", id: 3 },
  ]);

  return (
    <ListContext.Provider value={{ tasks }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvier;
