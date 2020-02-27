import React, {Component} from 'react';
import './GamePage.css';

import TopNavBar from "../TopNavBar/TopNavBar";
import Game from '../Game/Game';
import Loading from '../Game/Loader/Loader';
import {connect} from 'react-redux';

class GamePage extends Component {


    state = {
        token: localStorage.getItem('token'),
        loggedIn: false,
        artistId: '0PFtn5NtBbbUNbU9EAmIWF',
        artistImg: '',
        artistName: '',
        artistGenre: '',
        loading: true
    };

    componentDidMount() {
        console.log(this.props.firstArtist);
        const validToken = localStorage.getItem('expirationDate') > (Date.now());
        if (localStorage.getItem('token') && validToken) {
            this.setState({
                loggedIn: true
            });
        } else {
            this.setState({
                loggedIn: false
            });
            this.props.history.push('/');
        }
    }
    render() {
        let page = <Loading/>;
        if (!this.state.loading) {
            page = <Game artistImg={this.state.artistImg}
                         artistName={this.state.artistName}
                         artistGenre={this.state.artistGenre}
                         trackPrev={this.state.trackPrev}/>
        }
        return (
            <div className="gamePage">
                <TopNavBar loggedIn={this.state.loggedIn}/>
                {page}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstArtist: state.firstArtist,
    }
};

export default connect(mapStateToProps, null)(GamePage);