import React from "react";
import { connect } from "react-redux";
import { createBoard, shuffleBoard } from "../store/board";
import Square from "./Square.js";

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.positions = [];
    this.props.createBoard(5);
  }

  render() {
    const { currentPositions } = this.props;
    return (
      <div id="game">
        <div id="puzzle">
          {currentPositions.map((position, idx) => {
            if (idx < currentPositions.length - 1) {
              return <Square key={position} tileNumber={position} />;
            } else {
              return <span key={position}></span>;
            }
          })}
        </div>
        <button onClick={this.props.shuffleBoard}>Shuffle</button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    currentPositions: state.board.currentPositions,
  };
};

const mapDispatch = (dispatch) => {
  return {
    createBoard: (width) => dispatch(createBoard(width)),
    shuffleBoard: () => dispatch(shuffleBoard()),
  };
};

export default connect(mapState, mapDispatch)(Puzzle);
