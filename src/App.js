import React, { useState } from "react";
import List from "./components/List";
import ListContextProvier from "./context/ListContext";

const App = () => {
  return (
    <ListContextProvier>
      <div className="container">
        <div className="add-wrapper">
          <div className="main">
            <List />
          </div>
        </div>
      </div>
    </ListContextProvier>
  );
};

export default App;
