// src/index.js

import React, { Component } from "react"; // Change this line UMJESTO React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
//Change this line UMJESTO  extends React.Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Padawans!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
