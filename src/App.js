import React from "react";
import PropTypes from "prop-types";

function Movie({ subject, image, rating }) {
  return (
    <div>
      <h4>I like {subject} S2</h4>
      <h5>rating: {rating}</h5>
      <img src={image} width="300px" alt={subject} />
    </div>
  );
}

Movie.propTypes = {
  subject: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const likedMovie = [
  {
    id: 1,
    subject: "Memento",
    image:
      "http://ticketimage.interpark.com/Movie/still_image/V08/V0801339p_01.gif",
    rating: 5,
  },
  {
    id: 2,
    subject: "Parosite",
    image:
      "https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg",
    rating: 4,
  },
  {
    id: 3,
    subject: "CUBE",
    image:
      "https://movie-phinf.pstatic.net/20111222_68/1324503834866ARyKw_JPEG/movie_image.jpg",
    rating: 4.5,
  },
];

function App() {
  const movies = likedMovie.map((item) => (
    <Movie
      subject={item.subject}
      image={item.image}
      key={item.id}
      rating={item.rating}
    />
  ));
  return (
    <div>
      <h1>Header</h1>
      {movies}
    </div>
  );
}

export default App;
