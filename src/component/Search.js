import React, { Component } from "react";

export default class Search extends Component {
  /**
   * move search box up when user starts to type
   ** @param {}
   */
  setStyleForSearchbox = () => {
    return this.props.query ? { marginTop: "10px" } : {};
  };
  setStyleForSearchLogo = () => {
    return this.props.query ? { display: "none" } : {};
  };
  render() {
    return (
      <div className="search-section" style={this.setStyleForSearchbox()}>
        <img
          className="logo"
          style={this.setStyleForSearchLogo()}
          src="/img/brand512.svg"
          alt="logo"
        />
        <div className="search-box">
          <i className="fa fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search a movie"
            value={this.props.query}
            onChange={this.props.handleSearchChange}
          />
        </div>
      </div>
    );
  }
}
