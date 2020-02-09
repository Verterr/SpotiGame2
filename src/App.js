import React from 'react';
import MainPage from './Components/mainPage/mainPage';
import GamePage from "./Components/gamePage/gamePage";
import {Route, Switch} from "react-router-dom";

export default function App() {
        let routes = (
            <Switch>
                <Route path="/game" component={GamePage}/>
                <Route path="/" exact component={MainPage}/>
            </Switch>
        );

        return (
            <div className="App">
                {routes}
            </div>
        );
    }