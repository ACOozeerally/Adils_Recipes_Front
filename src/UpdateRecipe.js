import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class UpdateRecipe extends Component {
  constructor(props){
    super(props);
    this.state={
      updateRecipe: false
    }
  }

  activateFields = (event) =>{
    this.setState({updateRecipe:true});
  }
  reloadPage = (event) => {
      window.location.reload()
  }


  updateRecipe = (event) => {
    event.preventDefault();
    var data ={
      recipeID: this.props.updateID,
      recipeName:document.getElementById('recipeName').value,
      author:document.getElementById('author').value,
      cuisine:document.getElementById('cuisine').value,
      ingredients:document.getElementById('ingredients').value
    }
    axios.put('http://localhost:8080/AdilsRecipes/rest/recipes/updateRecipe/' + this.props.updateID, data, {headers:{ crossorigin:true}}).then((res) => 
    {window.location.reload()});

  } 
  render() {
      return(
        <div>
            Updating {this.props.recipeName}
        <br/>
        <input id="recipeName" className ="form-control" type = "text" placeholder = "Name of Recipe" style={{width:'400px'}} />
        <br/>
        <input id = "author" className ="form-control" type = "text" placeholder = "Author" style={{width:'150px'}} />
        <br/>
        <input id = "cuisine" className ="form-control" type = "text" placeholder = "Cuisine" style={{width:'250px'}} />
        <br/>
        <input id ="ingredients" className ="form-control" type ="text" placeholder = "Ingredients" style={{width:'250px'}} />
        <button className= "btn btn-info" dataAlign="right" onClick={this.updateRecipe}>Submit</button>
        <button className= "btn btn-warning" dataAlign="right" onClick={this.reloadPage}>Back</button>
        </div>
    );
  }
}

export default UpdateRecipe;
