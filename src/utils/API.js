import axios from "axios";
const URL = "http://localhost:8080"
// const URL = "https://seefood-api.herokuapp.com"

const API = {
    getIngredients: ()=>{
        return axios.get(`${URL}/api/ingredients`)
    },
    getOneIngredient: (id)=>{
        return axios.get(`${URL}/api/ingredients/${id}`)
    },
    addIngredient: (newIngredient)=>{
        return axios.post(`${URL}/api/ingredients`,newIngredient);
    },
    updateIngredient: (id, updatedIngredient)=>{
        return axios.put(`${URL}/api/ingredients/${id}`,updatedIngredient);
    },
    deleteIngredient: (id)=>{
        return axios.delete(`${URL}/api/ingredients/delete/${id}`)
    }
}

export default API