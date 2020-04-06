import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Component/header/Header";
import HomePage from "./Component/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "DeadPool",
        email: "  deadpool@gmail.com",
        avatarUrl: require("./assets/img/deadpool.jpg"),
        pendingRequeste: "10",
        invites: "25",
        connections: "253"
      }
    };
  }
  updateUser = (user) => {
    const newUser = {
      ...this.state.user,
      ...user
    }
    this.setState ({user:newUser})
  };
  render() {
    return (
      <React.Fragment>
        <Navigation user={this.state.user}/>
        <HomePage user={this.state.user}/>
      </React.Fragment>
    );
  }
}

export default App;
