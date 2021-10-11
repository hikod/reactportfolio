import './App.css';
import React, { useState } from 'react';
import Footer from './compenents/Footer';
import Contact from './compenents/Contact';
import Nav from './compenents/Navigation';
import About from './compenents/About ';


function App() {


  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <Contact></Contact>)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
