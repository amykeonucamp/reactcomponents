import React from "react";

// standard function
function FunctionGreeting() {
  return (
    <React.Fragment>
      <h2>Function Component Example 1</h2>
      <p>Hello World from Function</p>
    </React.Fragment>
  );
}

// the export is the name of the function
export default FunctionGreeting;

// arrow function
// the export is different because the return value is in a variable, ArrowFunctionGreeting
// note that the variable starts with an uppercase because it will be used as a JSX element
export const ArrowFunctionGreeting = () => {
  return (
    <React.Fragment>
      <h2>Function Component Example 2</h2>
      <p>Hello World from Arrow Function</p>
    </React.Fragment>
  );
};
