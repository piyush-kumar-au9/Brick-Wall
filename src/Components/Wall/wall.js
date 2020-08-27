/* A mini project to create walls from Reactjs */


/* To make a file a React componet always import React from react file*/
import React from 'react';


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
            <p>Hello My first React App</p>
        )

    }
}

