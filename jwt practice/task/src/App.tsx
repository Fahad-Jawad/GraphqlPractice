import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import routes from './routes/routes';
import { Route, Router, RouterProvider, Routes,BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>

    
  </BrowserRouter>
    </div>
  );
}

export default App;
