import React, {Component} from "react";
import {connect} from 'react-redux';

import Card from "../Card/Card";
import './CurrentArtistCard.css';


class CurrentArtistCard extends Component {

    render() {
        console.log("Current Artist Card opened");
        return(
            <div className="cardPage">
                <div className="cardContent">
                    <div className="firstCard">
                        <h2>First Card</h2>
                        <Card artist={this.props.firstArtist}/>/>
                    </div>
                    <div className="currentCard">
                        <h2>Current Card</h2>
                        <Card artist={this.props.currentArtist}/>
                    </div>
                    <div className="targetCard">
                        <h2>Target Card</h2>
                        <Card artist={this.props.targetArtist}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstArtist: state.firstArtist,
        currentArtist: state.currentArtist,
        targetArtist: state.targetArtist
    }
};

export default connect(mapStateToProps, null)(CurrentArtistCard);