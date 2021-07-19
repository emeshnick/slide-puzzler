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
        <select
          onChange={(evt) => {
            this.props.createBoard(evt.target.value);
          }}
        >
          <option value="4">4 x 4</option>
          <option default value="5">
            5 x 5
          </option>
          <option value="6">6 x 6</option>
          <option value="7">7 x 7</option>
        </select>
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
