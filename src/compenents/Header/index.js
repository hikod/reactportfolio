import React from 'react';
import Nav from '../Navigation';


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
                <ul className="flex-row">
                    <li className="mx-4">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-4 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Portfolio</span>
                    </li>
                    <li className={`mx-4 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li className={`mx-4 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Resume</span>
                    </li>

                </ul>
            </nav>        </header>
    );
}

export default Header;