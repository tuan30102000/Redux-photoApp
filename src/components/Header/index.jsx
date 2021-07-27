import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './style.scss'

Header.propTypes = {

};

function Header(props) {
    return (
        <header className='layout'>
            <div className="header-box layout-box">
                <a
                    className="header__link header__title"
                    href="https://youtube.com/easyfrontend"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Easy Frontend
                </a>
                <NavLink
                    exact
                    className="header__link"
                    to="/photos"
                    activeClassName="header__link--active"
                >
                    Photo
                </NavLink>
            </div>
        </header>
    );
}

export default Header;