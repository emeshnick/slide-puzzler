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
    for (let i = 0; i < size; i++) {
      this.positions.push(idx);
      idx++;
    }
  }

  render() {
    console.log("positions are", this.positions);
    return (
      <div id="puzzle">
        {this.positions.map((position, idx) => {
          if (idx < this.positions.length - 1) {
            return <Square key={position} tileNumber={position} />;
          } else {
            return <span></span>;
          }
        })}
      </div>
    );
  }
}

export default Puzzle;
