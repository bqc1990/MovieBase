import React, { Component } from "react";

export default class Cast extends Component {
  render() {
    return (
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w185${this.props.cast.profile_path}`}
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.cast.name}</h5>
          <p className="card-text ">
            <small>{this.props.cast.character}</small>
          </p>
        </div>
      </div>
    );
  }
}
