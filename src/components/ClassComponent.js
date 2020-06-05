import React, { Component } from "react";

// Class component

/* 
  How to use:
  <ClassGreeting />
*/
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

// the export is the name of the class
export default ClassGreeting;
