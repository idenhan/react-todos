import React from "react";
import ListContextProvier from "./context/ListContext";

import Jumin from "./containers/Jumin";
import Todos from "./containers/Todos";

const App = () => {
  return (
    <React.Fragment>
      <ListContextProvier>
        <div className="container">
          <Todos />
          <Jumin />
        </div>
      </ListContextProvier>
    </React.Fragment>
  );
};

export default App;
