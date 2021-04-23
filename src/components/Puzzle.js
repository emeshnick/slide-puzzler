import React from "react";
import Square from "./Square.js";

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.positions = [];
    this.setPositions(5);
  }

  setPositions(width) {
    const size = width ** 2;
    let idx = 1;
    for (let i = 0; i <= size; i++) {
      this.positions.push(idx);
      idx++;
    }
  }

  render() {
    return (
      <div id="puzzle">
        {this.positions.map((position) => {
          return <Square key={position} />;
        })}
      </div>
    );
  }
}
