import React from "react";
import './styles/Delete.css';

function DeleteCard(props) {

    return (
        <div className="input-field col s12">
            <ul className="list-group">
                <li className="list-group-item">
                    <h5>{props.name} TEST</h5>
                    <button ><i className="far fa-trash-alt fa-2x"></i></button>
                </li>
            </ul>
        </div>
    )
}

export default DeleteCard