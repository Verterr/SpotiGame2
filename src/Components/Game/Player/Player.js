import React, {Component} from 'react';

import './Player.css';

import ReactHowler from 'react-howler';
import {Fab} from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
class Player extends Component {

    state = {
        playing: false,
    };

    playHandler = (state) => {
        this.setState({
            playing: state
        })
    };

    render() {
        let icon = <PlayArrowIcon/>
        if(this.state.playing) {
            icon = <PauseIcon/>
        }
        return (
            <div className="player">
                {/*<h3>{this.props.trackPrev.name}</h3>*/}
                <h3>{this.props.trackPrev.name}</h3>
                <Fab className="playButton" onClick={() => this.playHandler(!this.state.playing)}>
                    {icon}
                    <ReactHowler
                        format={['mp3']}
                        src={this.props.trackPrev.preview_url}
                        playing={this.state.playing}
                        ref={(ref) => (this.player = ref)}
                        volume={this.props.volume}
                    />
                </Fab>
            </div>
        )
    }
};

export default Player;