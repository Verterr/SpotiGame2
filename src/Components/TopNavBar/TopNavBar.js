import React from 'react';
import './TopNavBar.css';
import {loginURL} from '../../Containers/Auth/auth';

const topNavBar = props => {

    let links = (
        <nav>
            <a href={loginURL} >Login/Register</a>
            <a href="/">Top Results</a>
        </nav>
    );

    if (props.loggedIn) {
        links = (
            <nav>
                <a href="/">Top Results</a>
                <a href="/">My account</a>
            </nav>
        )
    };

    return (
        <div className="topNavBar">
            <a className="logo" href="/">Logo</a>
            {links}
        </div>
    );
};

export default topNavBar;