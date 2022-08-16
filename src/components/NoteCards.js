import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaTrash } from "react-icons/fa";
import AddCard from './AddCard';
import ReactDeleteRow from 'react-delete-row';
import { toast } from 'react-toastify';
// import Props from './AddCard'

const NoteCards = () => {


    const [notesData, setNotesData] = useState()
    const [search, setSearch] = useState('')
    console.log(search);




    const notes = useSelector(state => state);
    const dispatch = useDispatch()

    const AllNote = notes.counter

    console.log(AllNote);


    // ...delete....
    const deleteNote = (id) => {
        dispatch({ type: "DELETE_NOTE", payload: id });
    }


    const onChangeTitle = (e, id, color) => {
        console.log(id);
        setNotesData("")
        setNotesData({ ...notesData, id: id, color: color, [e.target.name]: e.target.value })
        dispatch({ type: "UPDATE_TITLE", payload: notesData })
    }

    const onChangeDescription = (e, id, color) => {
        console.log(id);
        setNotesData("")
        setNotesData({ ...notesData, id: id, color: color, [e.target.name]: e.target.value })
        dispatch({ type: "UPDATE_DESCRIPTION", payload: notesData })
    }




    const searchFilter = () => {
        const filterData = AllNote.filter((data) => data.title.toLowerCase().includes(search.toLocaleLowerCase()) || data.description.toLowerCase().includes(search.toLocaleLowerCase()));
        console.log(filterData, "search-filterData");
        return filterData;
    }


    const clearSearch = (e) => {
        e.preventDefault();
        setSearch('')
    }



    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-12 ms-auto my-3">
                        <Form className="d-flex col-12 searchBar">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={search || ""}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button type='submit' variant="outline-success" className='btn btn-danger' onClick={clearSearch}>Clear</button>
                        </Form>
                    </div>
                </div>

                <AddCard />
                <div className="row">

                    {
                        searchFilter().map((data, index) => {
                            return (
                                <ReactDeleteRow key={data.id} data={data} deleteElement={<FaTrash />} iconClassName='text-danger' onDelete={data => { return toast.success("Delete succesfully") }}>
                                    <div className='col-12'>
                                        <div className="card mb-5">
                                            <div className="card-body" style={{ backgroundColor: data.color }}>

                                                <form>
                                                    <div className='form-group card-title'>
                                                        <input type='text'
                                                            placeholder="title"
                                                            className='form-control form-border form-title mt-3'
                                                            defaultValue={data.title}
                                                            onBlur={(e) => onChangeTitle(e, data.id, data.color)}
                                                            name='title'
                                                        />
                                                        <textarea type='text'
                                                            placeholder="description"
                                                            className='form-control form-border'
                                                            defaultValue={data.description}
                                                            onBlur={(e) => onChangeDescription(e, data.id, data.color)}
                                                            name='description' autoComplete='off'
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </ReactDeleteRow>

                            )
                        })
                    }

                </div>
            </div>
            {/* <div className='d-none'>
            <Props serchdata={search}/>
            </div> */}
        </>
    )
}

export default NoteCards
