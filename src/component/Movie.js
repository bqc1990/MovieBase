import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>
            <img
              style={{ maxHeight: "100px" }}
              alt="no poster"
              src={`https://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`}
            />
          </td>
          <td>
            <div>
              <a href={`/movie/${this.props.movie.id}`}>
                <h5>{this.props.movie.title}</h5>
              </a>
              <i className="fas fa-star" /> {this.props.movie.vote_average}
              <p>
                {this.props.movie.release_date} (
                {this.props.movie.original_language})
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }
}
