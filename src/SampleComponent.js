import React from "react";

class SampleComponent extends React.Component {
  render() {
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
        <h2 style={{ color: "green", backgroundColor: "indianred" }}>
          This is a sample react application.
        </h2>
      </div>
    );
  }
}

export default SampleComponent