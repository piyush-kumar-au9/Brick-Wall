/* Mini Project to add bricks in our wall using ReactJS */

import React from 'react';
import "./brickstyle.css"


// Arrow function is preferred to used in ReactJS according to ES6
// Functional Component as we don't want to store any data in it
// const is used to define the variable in JS which can't be changed once value is assigned to it
/* let is the keyword to define a mutable variable means which can be reassigned */
// To use JS inside html use {}

const Brick = (props) => {
    // console.log("How does my props look like", props);
    return(
        <div className = "brick-container">
            {props.name}
        </div>
    )
}

export default Brick;