import React from 'react';
import logo from '../vitae.svg';

const Header = () => (


    <nav className="navbar bg-primary navbar-dark sticky-top">
        <a className="navbar-brand" href="/">

            <img
                src={logo}
                alt="vitae logo"
                height="60"
                width="100" />
        </a>
        <a className="navbar-text mr-4" target="_blank" rel="noopener noreferrer" href="https://github.com/uckuruslukopera/vitae">

            Github'da gör
    </a>
    </nav>
)



export default Header;