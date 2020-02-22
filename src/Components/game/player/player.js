import React, {Component} from 'react';

import './player.css';

import ReactHowler from 'react-howler';
import raf from 'raf';

class Player extends Component {

    state = {
        playing: false,
        duration: this.props.trackPrev.duration_ms
    };

    playHandler = (state) => {
        this.setState({
            playing: state
        })
        // this.renderSeekPos()
    };

    // renderSeekPos () {
    //     this.setState({
    //         seek: this.player.seek()
    //     });
    //     if (this.state.playing) {
    //         this._raf = raf(this.renderSeekPos)
    //     }
    // }

    styleHandler = () => {

    };

    render() {
        return (

            <div className="player" onMouseEnter={() => this.playHandler(true)} onMouseLeave={() => this.playHandler(false)}>
                <h3>{this.props.trackPrev.name}</h3>
                <ReactHowler
                    format={['mp3']}
                    src={this.props.trackPrev.preview_url}
                    playing={this.state.playing}
                    ref={(ref) => (this.player = ref)}
                />
            </div>
        )
    }
};

export default Player;