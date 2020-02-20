import React, { useState, useEffect, Component } from 'react';
import API from "../../utils/API"
import Add from '../AddCard';
import AddRec from '../AddRec'
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
            price: "",
            ingredientId: ""
        },
        update: false
    }



    // ON PAGE LOAD
    //Grab all the existing ingredients from the database and adding them to the "ingredients[]"
    componentDidMount() {

        API.getIngredients()
            .then(res => this.setState({ 
                ingredients: res.data 
            }))
            .catch(err => console.log(err));
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
        let currIng = [...this.state.ingredients];
        
        if(this.state.ingredient.name !== ""){
            currIng.push(this.state.ingredient.name);
        }

        API.addIngredient(this.state.ingredient)
            .then(() => {
                this.getIngredients();
            })
            .catch(err => console.log(err));
    };

    // getIngredients = () => {
    //     API.getIngredients()
    //         .then((res) => {
    //             // pass prop to child that will cause it to update and run m.autoinit function
    //             this.setState({
    //                 ingredients: res.data,
    //                 update: true
    //             });
    //         })
    //         .catch(err => console.log(err));
    // }


    // The following functions are for "AddRec.js"
    handleIngredientSelection = event => {

        this.setState({
            newRec: {
                ...this.state.newRec,
                ingredientId: parseInt(event.target.value)
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
                    handleIngredientSelection={this.state.handleIngredientSelection}
                    handleAddRecommendation={this.state.handleAddRecommendation}
                    handleSubmitRecommendation={this.state.handleSubmitRecommendation}
                    update={this.state.update}
                />

                <Delete
                    handleDeleteRecommendation={this.state.handleDeleteRecommendation}
                    handleDeleteIngredient={this.state.handleDeleteIngredient}
                />
            </div>
        );
    }
}

export default ManageIng;