import React from "react";
import {Link} from "react-router-dom";

type MovieItemProps = {
    id: string,
    name: string,
};

const MovieItem = ({id, name}: MovieItemProps) => <div>
   <h2>{name}</h2>
    <Link to={`/movies/${id}`}>Link</Link>
</div>;

export default MovieItem;