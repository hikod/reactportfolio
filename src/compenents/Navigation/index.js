import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import { NavLink } from "react-router-dom";

function Nav() {


  return (

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
    </nav>

  );
}

export default Nav;
