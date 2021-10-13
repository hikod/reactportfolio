import './App.css';
import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";

import Footer from './compenents/Footer';
import Contact from './compenents/Contact';
import About from './compenents/About ';
import Header from './compenents/Header';
import Resume from './compenents/Resume';


function App() {


  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // sconst [contactSelected, setContactSelected] = useState(false);

  return (
    // <div className="App">
    //   <Header
    //     contactSelected={contactSelected}
    //     setContactSelected={setContactSelected}
    //   ></Header>
    //   <main>
    //     {!contactSelected ? (
    //       <>
    //         <About></About>
    //       </>
    //     ) : (
    //       <Contact></Contact>)}
    //   </main>
    //   <Footer></Footer>
    // </div>
    <Switch>
      {/* <Route exact path="/" component={Start} /> */}
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/aboutme" component={About} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  );
}

export default App;
