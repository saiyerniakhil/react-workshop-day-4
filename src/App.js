import React from "react";
import "./App.css";


function App() {
  // return (
  //   React.createElement(
  //     'div',
  //     {className: "App"},
  //     React.createElement('h1', null, "Hello, World!"),
  //     React.createElement('h2', null, "This is a sample react application.")
  //   )
  // )

  const numberOfTimes = 2;

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <input type="text" />
      <button
        onClick={() => {
          alert("hello");
        }}
      >
        sample button
      </button>
      {numberOfTimes * 4}
      <h2 style={{ color: "green", backgroundColor:"indianred" }}>This is a sample react application.</h2>
    </div>
  );
}

export default App;
