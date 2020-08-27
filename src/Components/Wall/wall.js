/* A mini project to create walls from Reactjs */


/* To make a file a React componet always import React from react file*/
import React from 'react';

/* Importing my css file for styling the component */
import "./style.css"


/* Importing brick component from Components folder */
import Brick from "../Brick/brick.js"

/* To create a class component */
/* To make the class component a React component */
// Class Based Component as in wall component we will store brick component data
class Wall extends React.Component{

    /* Various ways to declare a function

    1. abc = function(){}
    
    2. def(){}

    Arrow function
    3. ghi = () => {}
    */
    // @override method
    // render method returns what is being displayed on browser
    render = () =>{
        return(
            // Here we can embedd our html tags and logics
            // Embedding Brick Component inside wall component
            <div className="wall-container">
                <Brick />
                <Brick />
            </div>
        )

    }

}

/* Export is done so that this component can be used in other React Components */
/* Default export */
export default Wall;