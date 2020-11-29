import React, {Component} from "react";
import {connect} from 'react-redux';

import Card from "../Card/Card";
import './CardsDialog.css';
import {Dialog, DialogContent, Button} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';


class CardsDialog extends Component {

    render() {
        return(
                <Dialog className="cardsDialog" maxWidth="xl" onClose={this.props.closeCardsDialog} open={this.props.cardsDialog}>
                    <Button className="closeButton" onClick={this.props.closeCardsDialog}>
                        <CloseIcon/>
                    </Button>
                    <DialogContent>
                        <div className="cardInDialog">
                            <h2>First Card</h2>
                            <Card artist={this.props.firstArtist}/>
                        </div>
                        <div className="cardInDialog">
                            <h2>Current Card</h2>
                            <Card style={{backgroundColor: "#D9F8FF"}} artist={this.props.currentArtist}/>
                        </div>
                        <div className="cardInDialog">
                            <h2>Target Card</h2>
                            <Card style={{backgroundColor: "#E7E3A4"}} className="targetCard" artist={this.props.targetArtist}/>
                        </div>
                    </DialogContent>
                </Dialog>
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

export default connect(mapStateToProps, null)(CardsDialog);
