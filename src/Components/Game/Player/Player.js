import React, {Component} from 'react';
import './Player.css';
import ReactHowler from 'react-howler';
import {ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
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
        console.log(this.props.trackPrev);
        let icon = <PlayArrowIcon className="playerIcon" onClick={() => this.playHandler(!this.state.playing)}/>
        if(this.state.playing) {
            icon = <PauseIcon className="playerIcon" onClick={() => this.playHandler(!this.state.playing)}/>
        }
        return (
            <ListItem className="player">
                <ListItemAvatar>
                        <img className="albumImg" src={this.props.trackPrev.album.images[1].url}/>
                </ListItemAvatar>
                <ListItemText className="playerName" primary={this.props.trackPrev.name} secondary={this.props.trackPrev.album.name} />
                {icon}
                <ReactHowler
                    format={['mp3']}
                    src={this.props.trackPrev.preview_url}
                    playing={this.state.playing}
                    ref={(ref) => (this.player = ref)}
                    volume={this.props.volume}
                />
            </ListItem>
        )
    }
};

export default Player;
