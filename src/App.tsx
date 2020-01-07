import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Home from "./Home/Home";
import MovieList from "./Movies/MovieList";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Dashboard from "./Dashboard/Dashboard";
import MovieDetails from "./Movies/MovieDetails";
import MovieDetailsSidebar from "./Movies/MovieDetailsSidebar";

const App = () => (
    <BrowserRouter>
        <Header />
        <He
        <Switch>
            <Route path="/" exact render={() => null}/>
            <Route component={Header}/>
        </Switch>
        <Switch>
            <Route path="/" exact component={Hero}/>
        </Switch>
        <div style={{display: 'flex'}}>
            <Main>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/movies" exact component={MovieList}/>
                    <Route path="/movies/:movieId" exact
                           render={({match: {params: {movieId}}}) => <MovieDetails id={movieId}/>}/>
                </Switch>
            </Main>
            <Switch>
                <Route path="/movies/:movieId" exact component={MovieDetailsSidebar}/>
            </Switch>
        </div>
        <Switch>
            <Route component={Footer}/>
        </Switch>
    </BrowserRouter>
);


export default App;
