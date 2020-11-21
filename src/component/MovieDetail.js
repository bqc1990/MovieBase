import React, { Component } from "react";
import Axios from "axios";
import Button from "./Button";
import Casts from "./Casts";
export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: props.match.params.id,
      movie: {},
      genres: [],
      genreString: "",
    };
  }
  componentDidMount() {
    this.fetchMovieFromServer();
  }

  backToLastPage = (e) => {
    e.preventDefault();
    this.props.history.go(-1);
    return false;
  };

  fetchMovieFromServer = () => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/" +
        this.state.movie_id +
        "?api_key=" +
        process.env.REACT_APP_API_KEY
    )
      .then((res) => {
        // console.log("fetch data successfully", res.data);
        this.setState({
          movie: res.data,
          genres: res.data.genres,
        });
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  getGenreString = () => {
    let text = "";
    this.state.genres.forEach((item) => {
      text += item.name + ", ";
    });
    return text.slice(0, text.length - 2);
  };
  render() {
    return (
      <div className="container mt-2">
        <Button backToLastPage={this.backToLastPage} />
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w185${this.state.movie.poster_path}`}
                className="card-img"
                alt="no_poster"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title text-uppercase">
                  {this.state.movie.title} (
                  {new Date(this.state.movie.release_date).getFullYear()})
                </h1>
                <p className="card-text">
                  <small className="text-muted">
                    {this.state.genres.length === 0
                      ? null
                      : this.getGenreString()}
                    <br />
                    <i className="far fa-clock"></i> {this.state.movie.runtime}{" "}
                    mins
                  </small>
                </p>
                <p className="text-muted lead">{this.state.movie.tagline}</p>
                <h5>Overview</h5>
                <p className="card-text">{this.state.movie.overview}</p>
                <h5 className="">
                  Status: <small>{this.state.movie.status}</small>
                </h5>
                <h5 className="">
                  Budget:{" "}
                  <small>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(this.state.movie.budget)}
                  </small>
                </h5>
                <h5 className="">
                  Revenue:{" "}
                  <small>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(this.state.movie.revenue)}
                  </small>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Casts movie_id={this.state.movie_id} />
      </div>
    );
  }
}
