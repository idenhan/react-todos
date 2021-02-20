import React from "react";
import ListContextProvier from "./context/ListContext";

import JuminNaver from "./containers/JuminNaver";
import Todos from "./containers/Todos";

const App = () => {
  return (
    <React.Fragment>
      <ListContextProvier>
        <div className="container">
          <Todos />
          <JuminNaver />
        </div>
      </ListContextProvier>
    </React.Fragment>
  );
};

export default App;
