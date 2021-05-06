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
    const { currentPositions, solved } = this.props.board;
    return (
      <div id="game">
        <h1>Slide Puzzler</h1>
        <div id="puzzle">
          {currentPositions.map((position, idx) => {
            if (position < currentPositions.length - 1) {
              return (
                <Square key={position} tileNumber={position} position={idx} />
              );
            } else {
              return <span key={position}></span>;
            }
          })}
        </div>
        <button onClick={this.props.shuffleBoard}>Shuffle</button>
        {solved && <h2>Solved!</h2>}
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
  return {
    createBoard: (width) => dispatch(createBoard(width)),
    shuffleBoard: () => dispatch(shuffleBoard()),
  };
};

export default connect(mapState, mapDispatch)(Puzzle);
