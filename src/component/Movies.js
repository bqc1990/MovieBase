import React, { Component } from "react";
import Movie from "./Movie";
export default class Movies extends Component {
  render() {
    const movies = [];
    this.props.movies.forEach((movie) =>
      movies.push(<Movie key={movie.id} movie={movie} />)
    );
    return this.props.movies.length === 0 ? null : (
      <div>
        <table className="table">{movies}</table>
      </div>
    );
  }
}
