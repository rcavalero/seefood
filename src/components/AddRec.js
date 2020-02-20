import React, { Component, useEffect } from 'react';
import API from "../utils/API";
import M from "materialize-css";
import Upload from './Upload'


function AddRec(props) {
    
    return (
        <div className="container">
            <h2>Add Brand Recommendation</h2>
            
            <div className="row inputbox">
                
                {/* Select Ingredient */}
                <div className="input-field col s12">
                    
                    <select className="browser-default" defaultValue={"DEFAULT"} onChange={props.handleIngredientSelection}>
                        
                        <option value="DEFAULT" disabled>Select an Ingredient</option>
                        
                        {props.ingredients.map(ing => (
                            <option value={ing.id} key={ing.id}>{ing.name}</option>
                        ))}
                    </select>
                </div>
                

                {/* Brand Name for Rec */}
                <div className="input-field col s12" >
                    <label htmlFor="BrandName">Brand Name</label>
                    <input
                        value={props.newRec.brand}
                        name="brand"
                        onChange={props.handleAddRecommendation}
                        id="BrandName"
                        type="text" />
                </div>
                

                {/* Image for Rec */}
                <Upload handleImageUpload={props.handleImageUpload}/>  


                {/* Price for Rec */}
                <div className="input-field col s12" >
                    <label htmlFor="Price">Price</label>
                    <input
                        value={props.newRec.price}
                        name="price"
                        onChange={props.handleAddRecommendation}
                        id="Price"
                        type="number" />
                </div>
                

                {/* URL for Rec */}
                <div className="input-field col s12" >
                    <label htmlFor="Url">Link to Amazon Product</label>
                    <input
                        value={props.newRec.url}
                        name="url"
                        onChange={props.handleAddRecommendation}
                        id="Url"
                        type="url" />
                </div>
                

                {/* Submit Rec */}
                <div className="input-field col s12" >
                    <button className="btn btn-primary" onClick={props.handleSubmitRecommendation} >
                        Add Recommendation
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddRec