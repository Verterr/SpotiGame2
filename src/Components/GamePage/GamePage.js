import React, {Component} from 'react';
import './GamePage.css';

import TopNavBar from "../topNavBar/topNavBar";
import Game from '../game/game';

class GamePage extends Component {
    render() {
        return (
            <div className="gamePage">
                <TopNavBar/>
                <Game />
            </div>
        )
    }
}

export default GamePage;