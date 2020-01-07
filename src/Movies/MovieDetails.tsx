import React from "react";

type MovieDetailsProps = {
    id: string,
};

const MovieDetails = ({id}: MovieDetailsProps) => <div>Movies details {id}</div>;

export default MovieDetails;