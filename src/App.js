import React from "react";

class App extends React.Component {
  state = {
    loading: true,
    movies: [],
  };
  componentDidMount() {
    //movie data loading
    setTimeout(() => {
      this.setState({ loading: false });
    }, 6000); // set timeout 6sec
  }
  render() {
    const { loading } = this.state;
    return <div>{loading ? "Loading..." : "Loaded"}</div>;
  }
}

export default App;
