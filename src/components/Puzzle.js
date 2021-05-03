import React from "react";
import { connect } from "react-redux";
import { createBoard } from "../store/board";
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
      <div id="puzzle">
        {currentPositions.map((position, idx) => {
          if (idx < currentPositions.length - 1) {
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
    currentPositions: state.board.currentPositions,
  };
};

const mapDispatch = (dispatch) => {
  return {
    createBoard: (width) => dispatch(createBoard(width)),
  };
};

export default connect(mapState, mapDispatch)(Puzzle);
