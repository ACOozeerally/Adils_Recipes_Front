import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class CreateRecipe extends Component {
  constructor(props){
    super(props);
    this.state={
      createRecipe: false
    }
  }

  activateFields = (event) =>{
    this.setState({createRecipe:true});
    this.setState({reloadPage:true});
  }
  reloadPage = (event) => {
      window.location.reload()
  }

  createRecipe = (event) => {
    event.preventDefault();
    var data ={
      recipeName:document.getElementById('recipeName').value,
      author:document.getElementById('author').value,
      cuisine:document.getElementById('cuisine').value,
      ingredients:document.getElementById('ingredients').value,
    }
    axios.post('http://35.189.92.56:8080/AdilsRecipes/rest/recipes/createRecipe',data, {headers:{ crossorigin:true}}).then((res) => 
    {window.location.reload()});

  } 
  render() {
      return(
        <div>
        {this.state.createRecipe?
        <div>
        <input id="recipeName" className ="form-control" type = "text" placeholder = "Name of Recipe" style={{width:'400px'}} />
        <br/>
        <input id = "author" className ="form-control" type = "text" placeholder = "Author" style={{width:'150px'}} />
        <br/>
        <input id = "cuisine" className ="form-control" type = "text" placeholder = "Cuisine" style={{width:'250px'}} />
        <br/>
        <input id ="ingredients" className ="form-control" type ="text" placeholder = "Ingredients" style={{width:'250px'}} />
        <br/>
        <button className= "btn btn-success" dataAlign="centre" onClick={this.createRecipe}>Submit</button>
        <button className= "btn btn-warning" dataAlign="centre" onClick={this.reloadPage}>Back</button>
        </div>:<button className= "btn btn-success" onClick={this.activateFields}>Add Recipe</button>}
        </div>
    );
  }
}

export default CreateRecipe;
