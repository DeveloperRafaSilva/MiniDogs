import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Componentes/Form';
import Post from './Posts/Post';
import './style.css';
import Logout from './Logout';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="appDiv">
          <h1>Mini Dogs</h1>
          <Logout />
        </div>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
