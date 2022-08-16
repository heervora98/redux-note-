import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

const AddCard = (props) => {
    const dispatch = useDispatch();

        const color = '#' + Math.floor(Math.random() * 16777215).toString(16)

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: uuidv4(),
            title: "",
            description: "",
            color: color
        }

        dispatch({ type: "ADD_NOTE", payload: data });

      
    };

    // 


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-12 mb-5'>
                        <div className='form-group submit-btn'>
                            <button type='submit'
                                className='btn btn-block btn-dark ok-btn'
                                onClick={(e) => handleSubmit(e)}
                            >Add Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCard
