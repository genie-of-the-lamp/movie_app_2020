import React from "react";

function Movie(props) {
  const { movie } = props;
  return <h4>I like {movie} S2</h4>;
}

function App() {
  return (
    <div>
      <h1>Header</h1>
      <Movie movie="Memento" />
      <Movie movie="Parosite" />
      <Movie movie="Cube" />
    </div>
  );
}

export default App;
