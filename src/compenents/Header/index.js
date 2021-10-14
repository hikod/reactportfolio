import React from 'react';
import Nav from '../Navigation';
import { NavLink } from "react-router-dom";



function Header(props) {
    const {
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2 className="col-6">
                <a data-testid="link" href="/">
                    Lernantino
                </a>
            </h2>
            <Nav></Nav>
        </header>
    );
}

export default Header;