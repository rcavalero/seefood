import React, { Component } from "react";
import BrandCard from "../BrandCard"
import API from "../../utils/API"


class BrandRec extends Component {

    state = {
        brand: "",
        url: "",
        image: "",
        price: "",
        IngredientId: 0,
        recommendations: []
    }

    componentDidMount() {
        console.log(window.location.href)
        //grad the id
        //const = id
        API.getRecommendations( ).then(res => this.setState({ recommendations: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <BrandCard
            brand={this.state.brand}
            url={this.state.url}
            image={this.state.image}
            price={this.state.price}
             />
        )
    }
}

export default BrandRec;
