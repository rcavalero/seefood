import React, { Component } from 'react';
import API from "../utils/API"
import './styles/AddCard.css'


class AddIng extends Component {

    state = {
        name: ""
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

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        API.addIngredient(this.state);
        this.setState({
            name: ""
        });
    };

    render() {
        return (
            <div className="container">
                <h2>New Ingredient</h2>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="newIngredient" type="text" name="name" value={this.state.name}  onChange={this.handleInputChange}/>
                        <label htmlFor="newIngredient">Add an ingredient</label>
                        <button className="btn btn-primary" onClick={this.handleFormSubmit}>
                            Add Ingredient
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddIng;