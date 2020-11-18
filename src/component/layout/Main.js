import React, { Component } from "react";
import Axios from "axios";
import Search from "../Search";
import Movies from "../Movies";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      movies: [],
      showList: false,
      total_results: 0,
    };
  }
  fetchMoviesFromServer = async (query) => {
    const res = await Axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "f591d9d248bed29b18342a63fde2ada7",
        query: query,
      },
    });
    console.log(res.data);
    this.setState({
      movies: res.data.results,
      total_results: res.data.total_results,
    });
  };

  handleSearchChange = (e) => {
    if (!e.target.value) {
      this.setState({
        query: "",
        movies: [],
        showList: false,
      });
      return;
    }
    this.setState({
      query: e.target.value,
    });
    this.fetchMoviesFromServer(this.state.query);

    if (this.state.movies.length !== 0) {
      this.setState({
        showList: true,
      });
    }
  };
  render() {
    return (
      <div className="container">
        <Search
          handleSearchChange={this.handleSearchChange}
          query={this.state.query}
        />
        {this.state.showList && (
          <div>
            <h6>{this.state.total_results} movies found</h6>
            <Movies movies={this.state.movies} />
          </div>
        )}
      </div>
    );
  }
}
