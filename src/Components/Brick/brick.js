/* Mini Project to add bricks in our wall using ReactJS */

import React from 'react';
import "./brickstyle.css"
// Arrow function is preferred to used in ReactJS according to ES6
// Functional Component as we don't want to store any data in it
const Brick = () => {
    return(
        <div className = "brick-container"></div>
    )
}

export default Brick;