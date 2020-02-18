import React, {useState, useEffect} from 'react';
import API from "../../utils/API"
import Add from '../AddCard';
import Update from '../UpdateCard';
import Delete from '../DeleteCard'

function ManageI() {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        API.getIngredients().then(res=>{
          setIngredients(res.data)
        })
      })
    
      function deleteIngredient(id){
        console.log(id)
        API.deleteIngredient(id).then(res=>{
          API.getIngredients().then(res=>{
            setIngredients(res.data)
          })
        })
      }
    
    return (
        <div>
            <h1 className="center-align">Manage Ingredients</h1>
            <br />
            <Add />
            <Update />
            <div className="container" >
                <h2>Delete Ingredients</h2>
                <div className="row">
                {/* {props.animals.length ? props.animals.map(animalFromList=> <ZooItem key={animalFromList.id} userAuth={props.userAuth} deleteClickHandler={props.deleteClickHandler} animal={animalFromList}/>):<h2>Loading</h2>} */}

                    < Delete ingredients={ingredients} deleteIngredient={deleteIngredient} />
                </div>
            </div>
        </div>
    )
}

export default ManageI;