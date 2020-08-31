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
    /*
    state is a data that a class based component holds and that data belongs to that component only
    */
   // {} represent object - key value pair (similar to dictionary in python)
   constructor(props){
       super(props);
    this.state = {
          bricks: [1,2,3,4]
      }
    }   


   /* Some other ways to define state

      state = {
       bricks: []
   }


   */

   /* Event listener */
   // This function will be passed in the Button onClick attribute to add more bricks
   // setState is to used to update the data so that view can be updated as normal operation will change the data but no change in view will be reflected
   addOnClicks = () =>{
       // ... (spread operator) is used to copy a content of an array to other array in JS
       const newBricksArray = [ ...this.state.bricks ];
       newBricksArray.push(newBricksArray.length+1);
       // this.state.bricks.push(5);
       this.setState({
            bricks: newBricksArray
       })
   }

    /* Event listener */
   // This function will be passed in the Button onClick attribute to delete bricks
   deleteOnClicks = () =>{
        // ... (spread operator) is used to copy a content of an array to other array in JS
        const newBricksArray = [ ...this.state.bricks ];
        newBricksArray.pop();
        // this.state.bricks.push(5);
        this.setState({
            bricks: newBricksArray
        })
    }



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
            // key is used for unique identification of React Component
            // Button tags can be made functional using onClick attribute
            <div className="wall-container">
                {this.state.bricks.map((brick) => {
                    return <Brick key={brick} name={brick} />
                }
                
                )}
                <button className="btn" onClick={this.addOnClicks}>Add More Bricks</button>
                <button className="btn_2" onClick={this.deleteOnClicks}>Delete Bricks</button>
            </div>
        )

    }

}

/* Export is done so that this component can be used in other React Components */
/* Default export */
export default Wall;