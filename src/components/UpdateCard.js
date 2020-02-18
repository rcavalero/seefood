import React, { Component } from 'react';
import API from "../utils/API"

// Import Materialize
import M from "materialize-css";


class Update extends Component {

    state = {
        // search: "",
        ingredients: [],
        // selectedIngredient: [],
        id: 0,
        ingredient: "",
        // updIngredient:{        
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
        const value = event.target.value;
        // const name = event.target.name;
        const key = event.target.id;
        console.log(event.target.value)
        this.setState({ingredient: value})
        
        const temp = this.state.ingredients;
        let tempId = 0;

        temp.forEach((item)=>{
            if(item.ingredient === event.target.value){
                tempId = item.id;
                this.setState({id: tempId});
            }
            // console.log(item);
        })

        // this.setState({id: key});
        
        // this.setState({
        //   [name]: value
        // });

        API.getOneIngredient(tempId)
        .then(res => this.setState({ 

            asin1: res.data.asin1,
            asin2: res.data.asin2,
            asin3: res.data.asin3,
            asin4: res.data.asin4
         }))

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
        API.updateIngredient(this.state.id, this.state);
        console.log("state");
        
        console.log(this.state);
        
        this.setState({  
          id: 0,
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
                    value={this.state.ingredient}
                    onChange={this.handleIngredientSelection}
                            name={this.state.ingredients.ingredient}
                            list="ingredients"
                            type="text"
                            id={this.state.ingredients.id}
                    />
                        <datalist id="ingredients">
                          {this.state.ingredients.map(ingredient => (
                            <option value={ingredient.ingredient} data-id={ingredient.id} key={ingredient.id} />
                          ))}
                        </datalist>

                    </div>
                </div>

                    <div className="row">
                        <div className="input-field col s12" >
                        <label htmlFor="ASIN1up">ASIN 1</label>
                            <input id="ASIN1up" type="text"
                                value={this.state.asin1}
                                name="asin1"
                                onChange={this.handleInputChange} />
                            {/* <label htmlFor="ASIN1">ASIN 1</label> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="ASIN2up" type="text"
                                value={this.state.asin2}
                                name="asin2"
                                onChange={this.handleInputChange} />
                            <label htmlFor="ASIN2up">ASIN 2</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="ASIN3up" type="text"
                                value={this.state.asin3}
                                name="asin3"
                                onChange={this.handleInputChange} />
                            <label htmlFor="ASIN3up">ASIN 3</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="ASIN4up" type="text"
                                value={this.state.asin4}
                                name="asin4"
                                onChange={this.handleInputChange} />
                            <label htmlFor="ASIN4up">ASIN 4</label>
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