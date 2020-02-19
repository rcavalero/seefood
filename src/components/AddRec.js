import React, { Component } from 'react';
import API from "../utils/API"
// import './styles/AddCard.css'
// Import Materialize
import M from "materialize-css";
import Upload from './Upload'


class AddRec extends Component {

    state = {
        ingredients: [],
        name: "",
        id: ""
    }

    componentDidMount() {
        API.getIngredients()
            .then(res => this.setState({ ingredients: res.data }))
            .then(M.AutoInit())
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="container">
                <h2>Add Brand Recommendation</h2>
                <div className="row inputbox">
                    <div className="input-field col s12">
                        <select className="browser-default">
                            <option value="" disabled selected>Select an Ingredient</option>
                            {this.state.ingredients.map(ing => (
                                <option value={ing.name}> {ing.name} </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-field col s12" >
                        <input id="BrandName1" type="text" />
                        <label htmlFor="BrandName1">Brand Name 1</label>
                    </div>

                    {/* <button id="upload_widget" class="cloudinary-button">Upload files</button> */}
                    
                    <Upload />
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