import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>
                <Link to={'/'}>Gerenciar produtos</Link>
            </h2>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/config-form'} className='form-btn'>Novo formulário</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar