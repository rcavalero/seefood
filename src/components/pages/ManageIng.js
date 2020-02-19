import React, { useState, useEffect, Component } from 'react';
import API from "../../utils/API"
import Add from '../AddCard';
import AddRec from '../AddRec'
import Delete from '../DeleteCard'

// function ManageI() {
//     return (
//         <div>
//             <h1 className="center-align">Manage Ingredients</h1>
//             <br />
//             <Add />
//             <AddRec />
//             <div className="container" >
//                 <h2>Delete Ingredients</h2>
//                 <div className="row inputbox">
//                     <div className="input-field col s12">
//                         <select>
//                             <option value="" disabled selected>Choose your option</option>
//                             <option value="1">Option 1</option>
//                             <option value="2">Option 2</option>
//                             <option value="3">Option 3</option>
//                         </select>
//                         <label>Materialize Select</label>
//                     </div>
//                     < Delete />
//                 </div>
//             </div>
//         </div>
//     )
// }

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
        }
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
        API.addIngredient(this.state.ingredient);
    };

    // The following functions are for "AddRec.js"

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
                    
                />

                {/*<div className="container" >
                    <h2>Delete Ingredients</h2>

                    <div className="row inputbox">
                        <div className="input-field col s12">
                            <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <label>Materialize Select</label>
                        </div>

                        < Delete />
                    </div>
                </div> */}
            </div>
        );
    }
}

export default ManageIng;