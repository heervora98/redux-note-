import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const user = useSelector((state) => state);
    console.log(user.counter);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: uuidv4(),
            title,
            description
        }
        // console.log(data, "data");

        dispatch({ type: "ADD_NOTE", payload: data })
        // toast.success("User added successfully!")
        navigate('/');
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="col-md-12 text-center heading">
                        Add Notes
                    </h1>
                    <div className='col-md-6 Shadow mx-auto p-5 form-bg'>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group form-margin'>
                                    <input type='text'
                                        placeholder="title"
                                        className='form-control'
                                        value={title || ""}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className='form-group form-margin'>
                                    <input type='text'
                                        placeholder="description"
                                        className='form-control'
                                        value={description || ""}
                                        onChange={e => setDescription(e.target.value)}
                                    />
                                </div>

                                <div className='form-group submit-btn'>
                                    <input type='submit'
                                        value="OK"
                                        className='btn btn-block btn-dark ok-btn'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
