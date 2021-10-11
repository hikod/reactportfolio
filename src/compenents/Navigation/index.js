import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  // const {
  //   categories = [],
  //   setCurrentCategory,
  //   contactSelected,
  //   currentCategory,
  //   setContactSelected,
  // } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
        Lernantino
        </a>
      </h2>
    </header>
  );
}

export default Nav;
