import React, { Component } from 'react';
import './App.css';
import GetRecipes from './GetRecipes.js';
import  CreateRecipe from './CreateRecipe.js';
import UpdateRecipe from './UpdateRecipe.js';
import DeleteRecipe from './DeleteRecipe';
import Navbar from './Navbar.js'


class App extends Component {

  render() {
    return (
      <div className="App">

      <Navbar />

      <h1 align = "centre" >Recipes </h1>
      <CreateRecipe shouldUpdate={this.componentWillReceiveProps}/>
      <GetRecipes />
        <br/>
      </div>
    );
  }
}

export default App;

