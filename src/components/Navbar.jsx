import React from 'react';
import './navbar.css';
import '../Pages/stylesheet.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="flex">
                        <NavLink to='/'><h1 id='carint'>Carint</h1></NavLink>
                        <nav className='flex'>
                            <NavLink to='/'><h4>Home</h4></NavLink>
                            <NavLink to='/Service'><h4>Service</h4></NavLink>
                            <NavLink to='/About'><h4>About</h4></NavLink>
                            <NavLink to='/contact'><h4>Contact</h4></NavLink>
                        </nav>
                        <NavLink to='/login'><h3>Login</h3></NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar