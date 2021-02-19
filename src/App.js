import React, { useState } from "react";
import List from "./components/List";
import ListContextProvier from "./context/ListContext";
import "./App.css";

const App = () => {
  return (
    <ListContextProvier>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <List />
          </div>
        </div>
      </div>
    </ListContextProvier>
  );
};

export default App;
