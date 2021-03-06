import React from "react";

// standard function

/* 
  How to use:
  <FunctionGreeting />
*/
function FunctionGreeting() {
  return (
    <React.Fragment>
      <h2 className="headerFunction1">Function Component Example 1</h2>
      <p className="paragraphFunction1">Hello World from Function</p>
    </React.Fragment>
  );
}

// the export is the name of the function
export default FunctionGreeting;


// arrow function
// the export is different because the return value is in a variable, ArrowFunctionGreeting
// note that the variable starts with an uppercase because it will be used as a JSX element

/* 
  How to use:
  <ArrowFunctionGreeting />
*/
export const ArrowFunctionGreeting = () => {
  return (
    <React.Fragment>
      <h2 className="headerFunction2">Function Component Example 2</h2>
      <p className="paragraphFunction2">Hello World from Arrow Function</p>
    </React.Fragment>
  );
};
