import React from "react";
import './OutputPerson.css'
const outputPerson = (props) => {
  return (
    <div className="Output">
      <p>
        Hello!, I'm {props.name}
      </p>
      <p>
        I'm {props.age} years old!
      </p>
    </div>
  );
};

export default outputPerson;
