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
            <nav>

                <NavLink className="mx-4" activeClassName="active" to="/aboutme">
                    About me
                </NavLink>
                <NavLink className="mx-4" activeClassName="active" to="/portfolio">
                    Portfolio
                </NavLink>
                <NavLink className="mx-4" activeClassName="active" to="/contact">
                    Contact
                </NavLink>
                <NavLink className="mx-4" activeClassName="active" to="/resume">
                    Resume
                </NavLink>
                {/* <ul className="flex-row">
                    <li className="mx-4">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-4 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(false)}>Portfolio</span>
                    </li>
                    <li className={`mx-4 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li className={`mx-4 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(false)}>Resume</span>
                    </li>

                </ul> */}
            </nav>
        </header>
    );
}

export default Header;