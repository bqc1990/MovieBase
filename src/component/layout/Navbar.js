import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="/img/brand512.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="brand"
          />
          MovieBase
        </a>
      </nav>
    );
  }
}
