import React from 'react';
import MainPage from './Components/MainPage/MainPage';
import GamePage from "./Components/GamePage/GamePage";
import {Route, Switch, Redirect} from "react-router-dom";

export default function App() {
        let routes = (
            <Switch>
                <Route path="/game" component={GamePage}/>
                <Route path="/" exact component={MainPage}/>
                <Redirect to="/" />
            </Switch>
        );

        return (
            <div className="App">
                {routes}
            </div>
        );
    }