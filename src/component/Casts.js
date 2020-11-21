import Axios from "axios";
import React, { Component } from "react";
import Cast from "./Cast";

export default class Casts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: [],
    };
  }

  componentDidMount() {
    Axios.get(
      "https://api.themoviedb.org/3/movie/" +
        this.props.movie_id +
        "/credits?api_key=" +
        process.env.REACT_APP_API_KEY
    )
      .then((res) => {
        this.setState({
          cast: res.data.cast.slice(0, 6),
        });
        console.log(this.state.cast);
      })
      .catch();
  }
  render() {
    return (
      <div>
        <h3>Top Billed Cast</h3>
        <div className="card-deck ">
          {this.state.cast.map((cast) => (
            <Cast key={cast.cast_id} cast={cast} />
          ))}
        </div>
      </div>
    );
  }
}
