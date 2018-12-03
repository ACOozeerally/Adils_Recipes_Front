import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class GetRatings extends Component {
  constructor(props){
    super(props);
    this.state={
      getRatings: false,
    }
  }

  activateFields = (event) =>{
    this.setState({getRatings:true});
  }
  reloadPage = (event) => {
      window.location.reload()
  }


  componentWillMount = (event) => {
    console.log("mount");
    var data ={
      ratingID: this.props.ratingID,
    }
    axios.get('http://localhost:8080/AdilsRecipes/rest/recipes/getRecipeRatings/' + this.props.ratingID, data, {headers:{ crossorigin:true}}).then(response => {
      this.setState({
        recipeRatings: response.data,
      });
      console.log(response.data)
    });
  }
  render() {
      return(
        <div>
           {this.props.recipeName}'s Ratings

      <BootstrapTable
      data={this.state.recipeRatings}
      striped
      bordered
      search
      >
      <TableHeaderColumn Column width={'5%'} dataField="recipeID" isKey dataAlign="right" dataSort>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'20%'} dataField="outOfFive" dataAlign="right"dataSort >Rating out of Five</TableHeaderColumn>
      <TableHeaderColumn Column width={'50%'} dataField="comment" dataAlign="right"dataSort >Comment</TableHeaderColumn>
       </BootstrapTable>
       <button className= "btn btn-warning" dataAlign="right" onClick={this.reloadPage}>Back</button>

        </div>
    );
  }
}

export default GetRatings;
