import React from "react";
import MovieItem from "./MovieItem";

const MovieList = () => <div>
    <h1>Movie list</h1>
    <MovieItem id="1" name="Inception" />
    <MovieItem id="2" name="Batman" />
    <MovieItem id="3" name="Titanic" />
</div>;

export default MovieList;