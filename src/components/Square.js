import React from "react";
import { connect } from "react-redux";
import { moveSquare } from "../store/board";
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "",
      left: "",
    };
    this.setPosition = this.setPosition.bind(this);
    this.moveTile = this.moveTile.bind(this);
  }

  componentDidMount() {
    this.setPosition(this.props.tileNumber);
  }

  setPosition(positionNum) {
    let top = Math.floor(positionNum / 5) * 80;
    let left = (positionNum % 5) * 80;
    this.setState({
      top,
      left,
    });
  }

  moveTile() {
    console.log("clicked tile ", this.props.tileNumber);
  }

  render() {
    const { top, left } = this.state;
    return (
      <span
        onClick={this.moveTile}
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
