import React from "react";
import ValidationForm from "../components/ValidationForm";
import ValiHeader from "../components/ValiHeader";

import "../styles/Jumin.css";

const Todos = () => {
  return (
    <div className="app-wrapper">
      <ValiHeader />
      <div className="main">
        <ValidationForm />
      </div>
    </div>
  );
};

export default Todos;
