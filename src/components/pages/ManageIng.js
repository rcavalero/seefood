import React from 'react';
import Add from '../AddCart';
import Update from '../UpdateCard';

function ManageI() {
    return(
        <div>
            <h1 className="center-align">Manage Ingredients</h1>
            <br />
            <Add />
            <Update />
        </div>
    )
}

export default ManageI;