import React, { useState, useEffect, Component } from 'react';
import API from "../../utils/API"
import Add from '../AddCard';
import AddRec from '../AddRec'
import M from "materialize-css";
import Delete from '../DeleteCard'


class ManageIng extends Component {

    state = {
        ingredient: {
            name: ""
        },

        ingredients: [],
        newRec: {
            brand: "",
            url: "",
            image: "",
            price: "",
            IngredientId: ""
        }
    }


    // ON PAGE LOAD
    //Grab all the existing ingredients from the database and adding them to the "ingredients[]"
    getIngs = () =>{

        API.getIngredients()
            .then(res => this.setState({ 
                ingredients: res.data 
            }))
            .then(M.AutoInit())
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getIngs();
    }


    // The following functions are for "AddCard.js"
    handleAddIngredient = event => {

        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            ingredient: {
                [name]: value
            }
        });
    }

    handleSubmitIngredient = event => {

        event.preventDefault();

        console.log(this.state.ingredient);
        API.addIngredient(this.state.ingredient)
            .then(() => {
                this.getIngs();
            })
            .catch(err => console.log(err));
    };


    // The following functions are for "AddRec.js"
    handleIngredientSelection = event => {

        this.setState({
            newRec: {
                ...this.state.newRec,
                IngredientId: parseInt(event.target.value)
            }
        });
    };

    handleAddRecommendation = event => {

        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            newRec: {
                ...this.state.newRec,

                [name]: value
            }
        });
    };

    handleSubmitRecommendation = event => {
        event.preventDefault();
        API.addRecommendation(this.state.newRec);
        
        this.setState({
            newRec: {
                brand: "",
                url: "",
                image: "",
                price: "",
                IngredientId: 0
            }
        });
    }

    handleImageUpload = imageUrl=>{
        this.setState({
            newRec:{
                ...this.state.newRec,
                image:imageUrl
            }
        })
    }
    // The following functions are for "DeleteCard.js"
    handleDeleteRecommendation = event => {

    }

    handleDeleteIngredient = event => {

    }

    render() {
        return (
            <div>
                <h1 className="center-align">Manage Ingredients</h1>
                <br />

                <Add
                    name={this.state.name}
                    handleAddIngredient={this.handleAddIngredient}
                    handleSubmitIngredient={this.handleSubmitIngredient}
                />

                <AddRec
                    ingredients={this.state.ingredients}
                    newRec={this.state.newRec}
                    handleIngredientSelection={this.handleIngredientSelection}
                    handleAddRecommendation={this.handleAddRecommendation}
                    handleSubmitRecommendation={this.handleSubmitRecommendation}
                    update={this.update}
                    handleImageUpload={this.handleImageUpload}
                />

                <Delete
                    handleDeleteIngredient={this.state.handleDeleteIngredient}
                    handleDeleteRecommendation={this.state.handleDeleteRecommendation}
                />
            </div>
        );
    }
}

export default ManageIng;