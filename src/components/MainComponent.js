import React, { Component } from "react";
import { jsxElement } from "./JSXComponent";
import FunctionGreeting, { ArrowFunctionGreeting } from "./FunctionComponent";
import ClassGreeting from "./ClassComponent";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Examples of Creating React Components</h1>

        {/* 
            This JSX element is in a variable.
        */}
        {jsxElement}

        {/*
            Function Component using standard function statement
        */}
        <FunctionGreeting />

        {/* 
            Function Component using arrow function statement
        */}
        <ArrowFunctionGreeting />

        {/* 
            Class Component inheriting React.Component
        */}
        <ClassGreeting />        
        
      </React.Fragment>
    );
  }
}

export default Main;
