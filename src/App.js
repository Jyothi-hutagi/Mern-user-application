import React, {useState}from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Candidatepage from './Components/Candidatepage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Landingpage from './Components/Landingpage';

function App() {
 return (
  <div className="wrapper">
     <BrowserRouter>
     <Routes>
         <Route path='/' element={<Signup/>}>
        </Route>
        <Route path='login' element={<Login/>}>
        </Route>
        <Route path='candidate' element={<Candidatepage/>}>
        </Route>
        <Route path='landing' element={<Landingpage/>}>
        </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
