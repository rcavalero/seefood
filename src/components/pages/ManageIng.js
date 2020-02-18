import React from 'react';
import Add from '../AddCard';
import Update from '../UpdateCard';
import Delete from '../DeleteCard'

function ManageI() {
    return (
        <div>
            <h1 className="center-align">Manage Ingredients</h1>
            <br />
            <Add />
            <Update />
            <div className="container" >
                <h2>Delete Ingredients</h2>
                <div className="row">
                    < Delete />
                </div>
            </div>
        </div>
    )
}

export default ManageI;