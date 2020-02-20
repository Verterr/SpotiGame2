import React from 'react';

const Player = props => (
    <div className="player">
        <audio controls>
            <source src={props.trackPrev[0].preview_url} type="audio/mpeg"/>
        </audio>
        <audio controls>
            <source src={props.trackPrev[1].preview_url} type="audio/mpeg"/>
        </audio>
        <audio controls>
            <source src={props.trackPrev[2].preview_url} type="audio/mpeg"/>
        </audio>
    </div>
);

export default Player;