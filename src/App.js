import React from 'react';
import './App.css';
// import NavBar from './components/NavBar';
// import NoteCards from './components/NoteCards'
import Notes from './components/Notes'
import {Route, Routes } from 'react-router-dom';
// import Search from './components/Search';
import NoteCards from './components/NoteCards'

function App() {
  return (
    <>
    {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<NoteCards />}/>
        <Route path='/addnote' element={<Notes/>}/>
        {/* <Route path='/search' element={<Search/>}/> */}
      </Routes>
    </>
  );
}

export default App;
