import React, { Component } from 'react';
import './Navbar.css'



class Navbar extends React.Component {
  render() {

    return (
      <div>
        <ul className="navbar"> 

        <li className="title"><a>Adil's Recipes</a></li>
        <li className="logo"></li>

          {/* <li><a>Add Recipe</a></li> */}
        </ul> 

      </div>

    );

  }

}

export default Navbar;