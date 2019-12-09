import React from 'react';
import {HostelConsumer} from '../../context';
import logo from '../../images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';

const NavbarLink = ({ route, title, icon }) => {
    return (
        <NavLink to={route} className='navbar-links-item' activeClassName='nav-active'>
            <i className={`${icon} navbar-links-item-icon`} />{title}
        </NavLink>
    );
}

function Navbar() {
    return (
        <>
            <HostelConsumer>
                {navItem => {
                    let { navbarToggleHandler, navbarOpen } = navItem;
                    return (
                        <nav className='navbar'>
                            <div className='navbar-main'>
                                <div>
                                    <i
                                        className='fas fa-bars navbar-main-icon navbar-main-icon-bar icon'
                                        onClick={navbarToggleHandler}
                                    />
                                    <Link to='/'>
                                        <img 
                                            src={logo} alt="main logo" 
                                            className='navbar-main-logo' 
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <ul className={navbarOpen ? 'navbar-links show-nav' : 'navbar-links'}>
                                        <li><NavbarLink route='/' title='HOME' /></li>
                                        <li><NavbarLink route='/hostels' title='HOSTELS' /></li>
                                        <li><NavbarLink route='/contact' title='CONTACT' /></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    );
                }}
            </HostelConsumer>
        </>
    )
}

export default Navbar;
