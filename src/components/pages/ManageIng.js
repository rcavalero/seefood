import React, { useState, useEffect } from 'react';
import API from "../../utils/API"
import Add from '../AddCard';
import AddRec from '../AddRec'
import Delete from '../DeleteCard'

function ManageI() {
  return (
    <div>
      <h1 className="center-align">Manage Ingredients</h1>
      <br />
      <Add />
      <AddRec />
      <div className="container" >
        <h2>Delete Ingredients</h2>
        <div className="row inputbox">
                <div className="input-field col s12">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
          < Delete />
        </div>
      </div>
    </div>
  )
}

export default ManageI;