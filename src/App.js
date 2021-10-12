import './App.css';
import React, { useState } from 'react';
import Footer from './compenents/Footer';
import Contact from './compenents/Contact';
import About from './compenents/About ';
import Header from './compenents/Header';


function App() {


  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
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
