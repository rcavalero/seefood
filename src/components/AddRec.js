import React, { Component, useEffect } from 'react';
import API from "../utils/API"
import M from "materialize-css";
import Upload from './Upload'
// import './styles/AddCard.css'
// Import Materialize


// NEED TO ADD COMPONENT DID MOUNT FUNCTIONALITY
//     componentDidMount() {
//         API.getIngredients()
//             .then(res => this.setState({ ingredients: res.data }))
//             .then(M.AutoInit())
//             .catch(err => console.log(err));
//     }

function AddRec(props) {
    useEffect(() => {
        if (props.update) {
            M.AutoInit();
        }
    }, [props.update]);
    
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
                <Upload />  

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


// class AddRec extends Component {

//     state = {
//         ingredients: [],
//         newRec: {
//             brand: "",
//             url: "",
//             image: "",
//             price: "",
//             IngredientId: 0
//         },
//     }



//     handleIngredientSelection = event => {

//         this.setState({
//             newRec: {
//                 ...this.state.newRec,
//                 IngredientId: parseInt(event.target.value)
//             }
//         });
//     }


//     handleInputChange = event => {
//         // Getting the value and name of the input which triggered the change
//         const value = event.target.value;
//         const name = event.target.name;

//         // Updating the input's state
//         this.setState({
//             newRec: {
//                 ...this.state.newRec,

//                 [name]: value
//             }
//         });
//     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         API.addRecommendation(this.state.newRec);
//         this.setState({
//             newRec: {
//                 brand: "",
//                 url: "",
//                 image: "",
//                 price: "",
//                 IngredientId: 0
//             }
//         });
//     };

//     render() {
//         return (
//             <div className="container">
//                 <h2>Add Brand Recommendation</h2>
//                 <div className="row inputbox">
//                     <div className="input-field col s12">
//                         <select className="browser-default" defaultValue={"DEFAULT"} onChange={this.handleIngredientSelection}>
//                             <option value="DEFAULT" disabled>Select an Ingredient</option>
//                             {this.state.ingredients.map(ing => (
//                                 <option value={ing.id} key={ing.id}>{ing.name}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="input-field col s12" >
//                         <label htmlFor="BrandName">Brand Name</label>
//                         <input
//                             value={this.state.newRec.brand}
//                             name="brand"
//                             onChange={this.handleInputChange}
//                             id="BrandName"
//                             type="text" />
//                     </div>
//                     <Upload />
//                     <div className="input-field col s12" >
//                         <label htmlFor="Price">Price</label>
//                         <input
//                             value={this.state.newRec.price}
//                             name="price"
//                             onChange={this.handleInputChange}
//                             id="Price"
//                             type="number" />
//                     </div>
//                     <div className="input-field col s12" >
//                         <label htmlFor="Url">Link to Amazon Product</label>
//                         <input
//                             value={this.state.newRec.url}
//                             name="url"
//                             onChange={this.handleInputChange}
//                             id="Url"
//                             type="url" />
//                     </div>
//                     <div className="input-field col s12" >
//                         <button className="btn btn-primary" onClick={this.handleFormSubmit} >
//                             Add Recommendation
//                     </button>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }

export default AddRec