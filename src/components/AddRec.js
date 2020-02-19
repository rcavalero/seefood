import React, { Component } from 'react';
import API from "../utils/API"
// import './styles/AddCard.css'
// Import Materialize
import M from "materialize-css";


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
        <div className="row">
            <div className="input-field col s12">
                {/* <select> */}
                    <input
                        value={this.state.ingredients.name}
                        onChange={this.handleInputChange}
                        name={this.state.ingredients.name}
                        list="ingredients"
                        type="text"
                        id={this.state.ingredients.id}
                    />
                    <datalist id="ingredients">
                        {this.state.ingredients.map(ing => (
                            <option value={ing.name} id={ing.id} data-id={ing.id} key={ing.id} />
                        ))}
                    </datalist>
                {/* </select> */}
                <label>Select an ingredient</label>
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