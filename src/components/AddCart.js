import React, { Component } from 'react';


class Add extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>New Ingredient</h2>
                    <div className="input-field col s12">
                        <input id="newIngredient" type="text" />
                        <label for="newIngredient">Add an ingredient</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" >
                        <input id="ASIN1" type="text" />
                        <label for="ASIN1">ASIN 1</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="ASIN2" type="text" />
                        <label for="ASIN2">ASIN 2</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="ASIN3" type="text" />
                        <label for="ASIN3">ASIN 3</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="ASIN4" type="text" />
                        <label for="ASIN4">ASIN 4</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add;