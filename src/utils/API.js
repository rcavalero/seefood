import axios from "axios";
const URL = "http://localhost:8080"
// const URL = "https://seefoodar-api.herokuapp.com/"

const API = {
    getIngredients: ()=>{
        return axios.get(`${URL}/api/ingredients`)
    },
    getOneIngredient: (id)=>{
        return axios.get(`${URL}/api/ingredient/${id}`)
    },
    addIngredient: (newIngredient)=>{
        return axios.post(`${URL}/api/ingredient`,newIngredient);
    },
    getRecommendations: ()=>{
        return axios.get(`${URL}/api/recommendations`);
    },
    getIngredientRecs: (id)=>{
        return axios.get(`${URL}/api/recommendations/${id}`);
    },
    addRecommendation: (newRecommendation)=>{
        return axios.post(`${URL}/api/recommendation`,newRecommendation);
    },
    updateIngredient: (id, updatedIngredient)=>{
        return axios.put(`${URL}/api/ingredient/${id}`,updatedIngredient);
    },
    deleteIngredient: (id)=>{
        return axios.delete(`${URL}/api/ingredient/${id}`)
    },
    deleteRecommendation: (id)=>{
        return axios.delete(`${URL}/api/recommendation/${id}`)
    }
}

export default API