import React from "react";

const cardTemplate = props => {
    return(
        <div className="cardTemplate">
            <img className="photo"/>
            <h2 className="name"></h2>
            <p className="genre"></p>
        </div>
    )
};

export default cardTemplate;