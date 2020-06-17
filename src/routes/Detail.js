import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { state } = this.props.location;
    // year, title, summary, poster, genres
    if (state) {
      return (
        <div className="detail">
          <h1>
            {state.title} <span>({state.year})</span>
          </h1>
          <div className="genres">
            {state.genres.map((genre, index) => {
              return <span key={index}>{genre}</span>;
            })}
          </div>
          <div>
            <img src={state.poster} alt={state.title} />
            <p>{state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
