import React from "react";
import { connect } from "react-redux";
import { moveSquare } from "../store/board";
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.setPosition = this.setPosition.bind(this);
  }

  setPosition(positionNum) {
    let top = Math.floor(positionNum / 5) * 80;
    let left = (positionNum % 5) * 80;
    return {
      top,
      left,
    };
  }

  render() {
    const { moveSquare, position } = this.props;
    const { top, left } = this.setPosition(position);
    return (
      <span
        onClick={() => moveSquare(position)}
        className="square"
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          top,
          left,
        }}
      ></span>
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
    moveSquare: (positionNum) => dispatch(moveSquare(positionNum)),
  };
};

export default connect(mapState, mapDispatch)(Square);
