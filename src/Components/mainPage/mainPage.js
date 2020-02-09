import React, {Component} from 'react';
import './mainPage.css';

import TopNavBar from '../topNavBar/topNavBar';

class MainPage extends Component {

    playGameHandler = () => {
        this.props.history.push('/game');
    };

    render() {
        return (
            <div className="MainPage">
                <TopNavBar/>
                <div className="content">
                    <h1>SpotiGame</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor nec urna viverra commodo. In at dignissim enim. Nam ornare auctor lorem, vitae rutrum massa blandit quis. Nullam congue ultrices sem, ut faucibus odio facilisis ut. In id dapibus nunc. Mauris condimentum ipsum non tellus egestas dapibus. Ut luctus eros non auctor elementum. Proin feugiat tincidunt auctor. Donec ante ipsum, iaculis eget lorem eu, feugiat pulvinar nunc. Etiam arcu lacus, varius pellentesque aliquam at, pharetra ac ligula. Curabitur suscipit purus ut mi tempus cursus.
                    </p>
                    <br/>
                    <button onClick={this.playGameHandler}>Graj</button>
                </div>
            </div>
        )
    }
}


export default MainPage;