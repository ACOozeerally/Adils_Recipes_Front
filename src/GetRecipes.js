import React, { Component } from 'react';
import './App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import DeleteRecipe from './DeleteRecipe.js';
import UpdateRecipe from './UpdateRecipe';
import ReactDOM from 'react-dom';
import GetRatings from './GetRatings';


class GetRecipes extends Component {
  constructor(props){
    super(props)
    this.state={
      loaded: false,
      update:false,
      ratings: false
    }
  }

  componentWillMount = () => {
    console.log("mount")
    axios.get('http://35.189.92.56:8080/AdilsRecipes/rest/recipes/getAllRecipes').then(response => {
      this.setState({
        loaded: true,
        view:false,
        delete:false,
        recipes: response.data,
        rating: response.data.ratings
      });
      console.log(response.data)
    });
  }
  createRatingsButton = (cells, rows) => {
    return <button id={rows.recipeID} className="btn btn-info" onClick={() => this.ratingsFunction(rows)}>View/Add</button>;
    }
  createDeleteButton = (cells, rows) => {
    return <button id={rows.recipeID} className="btn btn-danger" onClick={() => this.deleteFunction(rows)}>Delete</button>;
    }
  createUpdateButton = (cells, rows) => {
    return <button id={rows.updateButton} className="btn btn-warning" onClick={() => this.updateFunction(rows)}>Update</button>;
    }

  deleteFunction = (rows) => {
    console.log(rows.recipeID);
    this.setState({deleteID: rows.recipeID,
      recipeName: rows.recipeName,
      delete:true,
      update:false,
      rating:false

    });
    //document.getElementById("delete").scrollIntoView({block: "start", inline: "start"});
    window.scrollTo(0,0)
  }
  updateFunction = (rows) => {
    console.log(rows.recipeID);
    this.setState({updateID: rows.recipeID,
      recipeName: rows.recipeName,
      delete:false,
      update:true,
      rating:false
    });
    //document.getElementById("update").scrollIntoView({block: "start", inline: "start"});
    window.scrollTo(0, 0)
  }
  ratingsFunction = (rows) => {
    console.log(rows.recipeID);
    this.setState({ratingID: rows.recipeID,
      recipeName: rows.recipeName,
      delete:false,
      update:false,
      rating:true
    });
    window.scrollTo(0, 0)  }
  
  render() {
    const loaded = this.state.loaded;
    return (
    <div className="GetRecipes" id="getRecipes">
    <div id="update">
      {this.state.update?<UpdateRecipe updateID={this.state.updateID} recipeName={this.state.recipeName}/>:null}
    </div>
    <div id="delete">
      {this.state.delete?<DeleteRecipe deleteID={this.state.deleteID} recipeName={this.state.recipeName}/>:null}
    </div>
    <div id="ratings">
      {this.state.rating?<GetRatings ratingID={this.state.ratingID} recipeName={this.state.recipeName}/>:null}
    </div>
      {loaded ?
      <BootstrapTable
      data={this.state.recipes}
      striped
      bordered
      search
      >
      <TableHeaderColumn Column width={'5%'} dataField="recipeID" isKey dataAlign="right" dataSort>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'10%'} dataField="recipeName" dataAlign="right"dataSort >Name</TableHeaderColumn>
      <TableHeaderColumn Column width={'10%'} dataField="author" dataAlign="right" >Author</TableHeaderColumn>
      <TableHeaderColumn Column width={'10%'} dataField="cuisine" dataAlign="right" >Cuisine</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField="ingredients" dataAlign="right" >Ingredients</TableHeaderColumn>
      <TableHeaderColumn Column width={'10%'} dataField="viewRating" dataAlign="right" dataFormat={this.createRatingsButton}>Ratings</TableHeaderColumn>
      <TableHeaderColumn Column width={'10%'} dataField="updateRecipe" dataAlign="right" dataFormat={this.createUpdateButton}>Update Recipe</TableHeaderColumn>
      <TableHeaderColumn Column width={'10%'} dataField="deleteRecipe" dataAlign="right" dataFormat={this.createDeleteButton}>Delete Recipe</TableHeaderColumn>
    </BootstrapTable>: <div><br/><CircularProgress/><br/></div>}
  </div>
  );
    
  }
}

export default GetRecipes;
