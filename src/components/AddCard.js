import React, { Component } from 'react';
import API from "../utils/API"
import './styles/AddCard.css'

function AddIng(props) {

    return (
        <div className="container">
            
            <h2>New Ingredient</h2>
            
            <div className="row inputbox">  
                <div className="input-field col s12">
                    
                    <input id="newIngredient" type="text" name="name" value={props.name} onChange={props.handleAddIngredient} />
                    
                    <label htmlFor="newIngredient">Add an ingredient</label>
                    
                    <button className="btn btn-primary red accent-2" onClick={props.handleSubmitIngredient}>
                        Add Ingredient
                    </button>
                </div>
            </div>
        </div>)
}

export default AddIng;