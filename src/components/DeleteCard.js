import React from "react";
import './styles/Delete.css';

function DeleteCard(props) {
    function clickHandler() {
        props.deleteClickHandler(props.ingredients.id)
    }


    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>{props.ingredients.ingredient}</h3>
                <button onClick={clickHandler}><i className="far fa-trash-alt fa-3x"></i></button>
            </li>
        </ul>
    )
}

export default DeleteCard