import React, {useState, useEffect} from "react";
import API from "../utils/API"
import './styles/Delete.css';

function DeleteCard(props) {
    
    function deleteIngredient() {
        props.handleDeleteIngredient(props.ingredient.id);
    }

    function deleteRecommendation() {
        props.handleDeleteRecommendation(props.recommendation.id);
    }

    return (

        <div className="container">
            
            <h2>Delete Ingredients / Recommendations</h2>
            <div className="row inputbox">

                <div className="input-field col s12">

                    <select className="browser-default" defaultValue={"DEFAULT"} onChange={props.handleIngredientSelection}>
            
                    <button onClick={deleteIngredient} ><i className="far fa-trash-alt fa-2x"></i></button>
            
                        {/* <option value="DEFAULT" disabled>Select an Ingredient</option>
            
                        {props.ingredients.map(ing => (
                            <option value={ing.id} key={ing.id}>{ing.name}</option>
                        ))} */}
                    </select>
                </div>
            </div>

            {/* <div className="input-field col s12">
                <ul className="list-group">
                    <li className="list-group-item" >
                        <h5>{props.recommendations.brand}</h5>
                        <button onClick={deleteRecommendation} ><i className="far fa-trash-alt fa-2x"></i></button>
                    </li>
                </ul>
            </div> */}
        </div>        
    )
}
            
export default DeleteCard