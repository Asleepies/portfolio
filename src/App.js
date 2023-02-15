import './App.css';
import React from 'react'
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";

function App() {


  return (
    <div className="App">
        
        <Link to='/'>
          <h1 className="header">Effie Jones</h1>
        </Link>
        <NavLink to='/projects' className='navLink'> Projects </NavLink>
        <NavLink to='/about' className='navLink'> About </NavLink>
        <NavLink to='/contact' className='navLink'> Contact </NavLink>

      <Outlet />
    </div>
  );
}

export default App;
