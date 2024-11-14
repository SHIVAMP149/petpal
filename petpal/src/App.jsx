import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Promotion from './components/Promotion';
import Login from './components/Login';


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>

              <Routes>

                <Route path='/' element={<Home/>}></Route>
                <Route path='/Promotion' element={<Promotion/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/login' element={<Login/>}></Route>

              </Routes>
            
            
            </BrowserRouter>
            
        </div>
    );
};

export default App;
