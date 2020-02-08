import React, {Component} from 'react';
import './mainPage.css';

import TopNavBar from '../topNavBar/topNavBar';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <TopNavBar/>
            </div>
        )
    }
}


export default MainPage;