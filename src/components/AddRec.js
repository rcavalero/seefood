import React, { Component } from 'react';
import API from "../utils/API"
// import './styles/AddCard.css'
// Import Materialize
import M from "materialize-css";
import Upload from './Upload'


class AddRec extends Component {

    state = {
        ingredients: [],
        newRec: {
            brand: "",
            url: "",
            image: "",
            price: "",
            IngredientId: 0
        },
        // name: "",
        // id: ""
    }

    componentDidMount() {
        API.getIngredients()
            .then(res => this.setState({ ingredients: res.data }))
            .then(M.AutoInit())
            .catch(err => console.log(err));
    }

    handleIngredientSelection = event => {
        // const value = event.target.value;
        // this.setState({ name: value })

        // const temp = this.state.ingredients;
        // let tempId = 0;

        // temp.forEach((item) => {
        //     // console.log(item)
        //     if (item.name === event.target.value) {
        //         tempId = item.id;
                this.setState({
                    newRec: {
                        ...this.state.newRec,
                        IngredientId: parseInt(event.target.value)
                    }
                });
            }
        // })
    // }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            newRec: {
                ...this.state.newRec,

            [name]: value}
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();


        API.addRecommendation(this.state.newRec);
        // console.log("state");

        // console.log(this.state);

        this.setState({
            newRec: {
                brand: "",
                url: "",
                image: "",
                price: "",
                IngredientId: 0
                }
});
    };

    // RunAPI(){
    //     API.getIngredients()
    //     .then(res => this.setState({ ingredients: res.data }))
    //     .then(M.AutoInit())
    //     .catch(err => console.log(err));
    // }  


    render() {
        return (
            <div className="container">
                <h2>Add Brand Recommendation</h2>
                <div className="row inputbox">
                    <div className="input-field col s12">
                        <select className="browser-default" defaultValue={"DEFAULT"} onChange={this.handleIngredientSelection}>
                            {/* <input
                        value={this.state.ingredients.name}
                        onChange={this.handleInputChange}
                        name={this.state.ingredients.name}
                        list="ingredients"
                        type="text"
                        id={this.state.ingredients.id}
                    />
                    <datalist id="ingredients"> */}
                            <option value="DEFAULT" disabled>Select an Ingredient</option>
                            {this.state.ingredients.map(ing => (
                                <option value={ing.id} key={ing.id}>{ing.name}</option>
                            ))}
                            {/* </datalist> */}

                        </select>
                        {/* <label onChange = {this.RunAPI}>Select an ingredient</label> */}
                    </div>
                    <div className="input-field col s12" >
                        <label htmlFor="BrandName">Brand Name</label>
                        <input
                            value={this.state.newRec.brand}
                            name="brand"
                            onChange={this.handleInputChange}
                            id="BrandName"
                            type="text" />
                    </div>

                    {/* <button id="upload_widget" class="cloudinary-button">Upload files</button> */}
                    <Upload />
                    <div className="input-field col s12" >
                        <label htmlFor="Price">Price</label>
                        <input
                            value={this.state.newRec.price}
                            name="price"
                            onChange={this.handleInputChange}
                            id="Price"
                            type="number" />
                    </div>
                    <div className="input-field col s12" >
                        <label htmlFor="Url">Link to Amazon Product</label>
                        <input
                            value={this.state.newRec.url}
                            name="url"
                            onChange={this.handleInputChange}
                            id="Url"
                            type="url" />
                    </div>
                    <div className="input-field col s12" >
                        <button className="btn btn-primary" onClick={this.handleFormSubmit} >
                            Add Recommendation
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddRec