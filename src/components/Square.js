import React from "react";
import { connect } from "react-redux";
import { moveSquare } from "../store/board";
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.setPosition = this.setPosition.bind(this);
  }

  setPosition(positionNum, width) {
    let top = Math.floor(positionNum / width) * (400 / width);
    let left = (positionNum % width) * (400 / width);
    return {
      top,
      left,
    };
  }

  render() {
    const { moveSquare, position, tileNumber } = this.props;
    const { top, left } = this.setPosition(position, this.props.board.width);
    const size = 400 / this.props.board.width;
    return (
      <span
        onClick={() => moveSquare(position)}
        className="square"
        style={{
          position: "absolute",
          width: size,
          height: size,
          top,
          left,
        }}
      >
        <p>{tileNumber + 1}</p>
      </span>
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
    moveSquare: (positionNum) => dispatch(moveSquare(positionNum)),
  };
};

export default connect(mapState, mapDispatch)(Square);
