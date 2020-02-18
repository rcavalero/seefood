import React, { Component } from 'react';
import API from "../utils/API"

// Import Materialize
import M from "materialize-css";


class Update extends Component {

    state = {
        ingredients: [],
        selectedIngredient: [],
        id: 0,
        ingredient: "",
        asin1: "",
        asin2: "",
        asin3: "",
        asin4: ""
      };

      componentDidMount() {
        API.getIngredients()
        .then(res => this.setState({ ingredients: res.data }))
        .then(M.AutoInit())
          .catch(err => console.log(err));
      }
    

    // componentDidMount() {
    //     // Auto initialize all the things!
    //     M.AutoInit();
    // }


    handleIngredientSelection = event => {
        // Getting the value and name of the input which triggered the change
        // const value = event.target.value;
        // const name = event.target.name;
        const key = event.target.id;
        console.log(key);
        
        // this.setState({id: key});
        this.setState({id: 5});
        // this.setState({
        //   [name]: value
        // });

        API.getOneIngredient(this.state.id)
        .then(res => this.setState({ selectedIngredient: res.data }))

        // Updating the input's state
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
        API.updateIngredient(this.state);
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
            <div className="container" >
                <div className="row">
                    <h2>Update Ingredient</h2>
                    <div className="input-field col s12">
                    <label>Select Ingredient</label>
                    <input
                    value={this.state.ingredients.ingredient}
                    onChange={this.handleIngredientSelection}
                            name="ingredient"
                            list="ingredients"
                            type="text"
                            id="ingredient"
                    />
                        <datalist id="ingredients">
                          {this.state.ingredients.map(ingredient => (
                            <option value={ingredient.ingredient} key={ingredient.id} />
                          ))}
                        </datalist>

                    </div>
                </div>

                    <div className="row">
                        <div className="input-field col s12" >
                            <input id="ASIN1" type="text"
                                value={this.selectedIngredient.asin1}
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
                            Update Ingredient
                        </button>
                    </div>
            </div> 
        </div>
        )
    }
}
        
export default Update;