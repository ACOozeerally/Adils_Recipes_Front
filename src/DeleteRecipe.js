import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class DeleteRecipe extends Component {
  constructor(props){
    super(props);
    this.state={
      deleteRecipe: false
    }
  }

  activateFields = (event) =>{
    this.setState({deleteRecipe:true});
  }
  reloadPage = (event) => {
      window.location.reload()
  }

  deleteRecipe = (event) => {
    event.preventDefault();
    var data ={
      recipeID: this.props.deleteID
    }
    axios.delete('http://35.189.92.56:8080/AdilsRecipes/rest/recipes/deleteRecipe/' + this.props.deleteID, data, {headers:{ crossorigin:true}}).then((res) => 
    {window.location.reload()});

  } 
  render() {
      return(
        <div>
            Are you sure you want to delete {this.props.recipeName}?
        <br/>
        <button className= "btn btn-danger" dataAlign="right" onClick={this.deleteRecipe}>Yes</button>
        <button className= "btn btn-warning" dataAlign="right" onClick={this.reloadPage}>No</button>
        </div>
    );
  }
}

export default DeleteRecipe;
