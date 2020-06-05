import React, { Component } from "react";

class ClassGreeting extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="headerClass">Class Component Example</h2>
        <p className="paragraphClass">Hello World from Class</p>
      </React.Fragment>
    );
  }
}

export default ClassGreeting;
