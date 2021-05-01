import React from "react";
import { connect } from "react-redux";
import Square from "./Square.js";

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.positions = [];
    this.setPositions(5);
  }

  //Move this logic to redux to change dynamically
  setPositions(width) {
    const size = width ** 2;
    for (let i = 0; i < size; i++) {
      this.positions.push(i);
    }
  }

  render() {
    const { solved, width, currentPositions } = this.props.board;
    return (
      <div id="puzzle">
        {this.positions.map((position, idx) => {
          if (idx < this.positions.length - 1) {
            return <Square key={position} tileNumber={position} />;
          } else {
            return <span key={position}></span>;
          }
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    board: state.board,
  };
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(Puzzle);
