import React from "react";
import "./InputPerson.css";
const inputPerson = (props) => {
  return (
    <div className="Input">
      <input
        type="text"
        onChange={props.changed}
        className="input-box"
        value={props.name}
      />
    </div>
  );
};

export default inputPerson;
