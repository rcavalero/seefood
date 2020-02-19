import axios from "axios";
const URL = "http://localhost:8080"
// const URL = "https://seefoodar-api.herokuapp.com/"

const API = {
    getIngredients: ()=>{
        return axios.get(`${URL}/api/ingredients`)
    },
    getOneIngredient: (id)=>{
        return axios.get(`${URL}/api/ingredients/${id}`)
    },
    addIngredient: (newIngredient)=>{
        console.log(newIngredient)
        return axios.post(`${URL}/api/ingredients`,newIngredient);
    },
    addRecommendation: (newRecommendation)=>{
        return axios.post(`${URL}/api/recommendation`,newRecommendation);
    },
    updateIngredient: (id, updatedIngredient)=>{
        return axios.put(`${URL}/api/ingredients/${id}`,updatedIngredient);
    },
    deleteIngredient: (id)=>{
        return axios.delete(`${URL}/api/ingredients/delete/${id}`)
    }
}

export default API