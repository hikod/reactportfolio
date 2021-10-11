import './App.css';
import Footer from './compenents/Footer';

function App() {


  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      {/* <Nav
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav> */}
      <main>
        {/* {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )} */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
