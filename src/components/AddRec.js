import React, { Component } from 'react';
import API from "../utils/API"
// import './styles/AddCard.css'
// Import Materialize
import M from "materialize-css";


class AddRec extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return (
            <div className="container">
                <h2>Add Brand Recommendation</h2>
                <div className="row">
                    <div className="input-field col s12">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                    <div className="input-field col s12" >
                        <input id="BrandName1" type="text" />
                        <label htmlFor="BrandName1">Brand Name 1</label>
                    </div>
                    <div className="input-field col s12" >
                        <input id="Img1" type="url" />
                        <label htmlFor="Img1">Image</label>
                    </div>
                    <div className="input-field col s12" >
                        <input id="Price1" type="number" />
                        <label htmlFor="Prife1">Price</label>
                    </div>
                    <div className="input-field col s12" >
                        <input id="Url1" type="url" />
                        <label htmlFor="Url1">Link to Amazon Product</label>
                    </div>
                    <div className="input-field col s12" >
                        <button className="btn btn-primary" >
                            Add Recommendation
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddRec