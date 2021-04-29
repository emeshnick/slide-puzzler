import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "",
      left: "",
    };
    this.setPosition(this.props.tileNumber);
  }

  setPosition(positionNum) {
    let top = Math.floor((positionNum - 1) / 5) * 40;
    let left = ((positionNum - 1) % 5) * 40;
    console.log(top, left);
    this.setState({
      top,
      left,
    });
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    const { top, left } = this.state;
    return (
      <span
        className="square"
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          top,
          left,
        }}
      ></span>
    );
  }
}

export default Square;
