import React from "react";
import './styles/Delete.css';

function DeleteCard(props) {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Ingredient</h3>
                <i class="far fa-trash-alt fa-3x"></i>
            </li>
        </ul>
    )
}

export default DeleteCard