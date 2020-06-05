import React from 'react';
import { jsxElement } from "./components/JSXComponent";
import FunctionGreeting, { ArrowFunctionGreeting } from "./components/FunctionComponent";
import ClassGreeting from "./components/ClassComponent";
import './App.css';

function App() {
  return (
    <React.Fragment>
        <h1>Examples of Creating React Components</h1>

        {/* 
            This JSX element is in a variable.
        */}
        {jsxElement}

        <hr />

        {/*
            Function Component using standard function statement
        */}
        <FunctionGreeting />

        <hr />

        {/* 
            Function Component using arrow function statement
        */}
        <ArrowFunctionGreeting />

        <hr />

        {/* 
            Class Component inheriting React.Component
        */}
        <ClassGreeting />
      </React.Fragment>
  );
}

export default App;
