/* A mini project to create walls from Reactjs */


/* To make a file a React componet always import React from react file*/
import React from 'react';

/* Importing my css file for styling the component */
import "./style.css"

/* To create a class component */
/* To make the class component a React component */
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
            <div className="wall-container"></div>
        )

    }

}

/* Export is done so that this component can be used in other React Components */
/* Default export */
export default Wall;