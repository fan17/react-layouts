import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter => counter + 1);
    return (
        <header style={{border: '1px solid blue'}}>
            {counter}
            <ul>
                <li><NavLink onClick={increment} to="/">Home</NavLink></li>
                <li><NavLink onClick={increment} to="/dashboard">Dasboard</NavLink></li>
                <li><NavLink onClick={increment} to="/movies">Movies</NavLink></li>
            </ul>
        </header>)
};

export default Header;