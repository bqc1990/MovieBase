import React, { Component } from "react";

export default class Search extends Component {
  /**
   * move search box up when user starts to type
   ** @param {}
   */
  setStyleForSearchbox = () => {
    return this.props.query ? { marginTop: "10px" } : {};
  };
  render() {
    return (
      <div className="search-section">
        <input
          className="search-box"
          type="text"
          placeholder="Search a movie"
          value={this.props.query}
          onChange={this.props.handleSearchChange}
          style={this.setStyleForSearchbox()}
        />
      </div>
    );
  }
}
