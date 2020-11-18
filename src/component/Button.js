import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const style = !this.props.buttonStyle
      ? "btn btn-outline-success"
      : this.props.buttonStyle;
    return (
      <button
        className={style}
        style={{ marginBottom: 5 }}
        onClick={this.props.backToLastPage}
      >
        Go Back
      </button>
    );
  }
}
