import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor execute");
  }

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  state = {
    count: 0,
  };

  increase = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  decrease = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  render() {
    console.log("render execute");
    return (
      <div>
        <h1>The number is: {this.state.count}.</h1>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default App;
