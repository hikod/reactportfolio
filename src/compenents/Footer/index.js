import React from 'react';
function Footer() {
    return (
        <footer>
            <ul className="flex-row justify-content-center">
                <li className="mx-5">
                    <a data-testid="linkedin" href="https://www.linkedin.com/" >
                        <i className="fab fa-linkedin-in fa-3x"></i>
                    </a>
                </li>
                <li className="mx-5">
                    <a data-testid="github" href="https://github.com/hikod" >
                        <i className="fab fa-github fa-3x"></i>
                    </a>
                </li>
                <li className="mx-5">
                    <a data-testid="stackoverflow" href="https://stackoverflow.com/" >
                        <i className="fab fa-stack-overflow fa-3x"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;