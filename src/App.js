import React, { Component } from "react";
import "./App.css";
import InputPerson from "./InputPerson/InputPerson";
import OutputPerson from "./OutputPerson/OutputPerson";

class App extends Component {
  state = {
    username: "Abhishek",
    age: 21,
  };

  inputEventHandler = (element) => {
    console.log("Changed");
    this.setState({
      username: element.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <InputPerson changed={this.inputEventHandler}/>
        <OutputPerson name={this.state.username} age={this.state.age}/>
      </div>
    );
  }
}

export default App;
