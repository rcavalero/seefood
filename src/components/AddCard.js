import React, { Component } from 'react';
import API from "../utils/API"


class Add extends Component {
    state = {
        ingredient: "",
        asin1: "",
        asin2: "",
        asin3: "",
        asin4: ""
      };
    
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
          ingredient: "",
          asin1: "",
          asin2: "",
          asin3: "",
          asin4: ""
        });
      };
    
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>New Ingredient</h2>
                    <div className="input-field col s12">
                        <input id="newIngredient" type="text"
                        value={this.state.ingredient}
                        name="ingredient"
                        onChange={this.handleInputChange} />
                        <label htmlFor="newIngredient">Add an ingredient</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" >
                        <input id="ASIN1" type="text"
                        value={this.state.asin1}
                        name="asin1"
                        onChange={this.handleInputChange} />
                        <label htmlFor="ASIN1">ASIN 1</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="ASIN2" type="text"
                        value={this.state.asin2}
                        name="asin2"
                        onChange={this.handleInputChange} />
                        <label htmlFor="ASIN2">ASIN 2</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="ASIN3" type="text" 
                        value={this.state.asin3}
                        name="asin3"
                        onChange={this.handleInputChange} />
                        <label htmlFor="ASIN3">ASIN 3</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="ASIN4" type="text"
                        value={this.state.asin4}
                        name="asin4"
                        onChange={this.handleInputChange} />
                        <label htmlFor="ASIN4">ASIN 4</label>
                    </div>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.handleFormSubmit}>
                            Add Ingredient
          </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Add;