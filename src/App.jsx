import { useState, useEffect } from 'react'
import { Link, Router, Route } from 'wouter'
// link: component used to create navigation links
// Router: wraps all your routes and manages the routing logic for the SPA.
// Route: defines individual routes, each maps a URL path to a specific component.
// The <Router> component monitors the current URL and renders the appropriate component
// based on which route matches the current path  

import axios from "axios";
import { useAtom } from "jotai";

// atom
import flashcardAtom from "./atom/FlashcardAtom";
//import component - not used 
//import Flashcard from "./components/Flashcard";

// import pages
import ListCards from './pages/ListCards';
import AddCard from './pages/AddCard';
import EditCard from './pages/EditCard';
import LoginPage from './pages/LoginPage';
import ConfirmDelete from './pages/ConfirmDelete';
import PlayCards from './pages/PlayCards';

function App() {

  const [flashcards, setFlashcards] = useAtom(flashcardAtom);

  // useState: create a state with default value false (not to show) 
  // - showMenu    variable store its current value
  // - setShowMenu functon can update its value
  // use the default value when the component is mounted
  const [showMenu, setShowMenu] = useState(false);

  // an effect refers to a functionality that occurs outside of the DOM
  // useEffect hook to create an effect, it takes 2 parameters:
  // 1. call back function containing side effects like data fetching,      
  // 2. a dependency array: If any of the state or prop within the array changes,
  //    the effect function will be called. Empty array: call once when mounting 

  useEffect(() => {

    // The top leve call back of useEffect cannot be async 
    // Instead, define the async function inside and call it immediately
    const fetchData = async () => {
      //console.log("reading from flashcards.json")
      // when we refer to any images, or static files for it in the public folder 
      // read cards from json:
      const response = await axios.get("./flashcards.json")
      setFlashcards(response.data);
    }
    fetchData();

  }, [])

  const toggleMenu = () => { setShowMenu(!showMenu); };

  // to return JSX elements under a single top level element use <>...</> 
  // represents a React fragment that will not show up in the DOM improving performance
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Flashcard App</a>

        <button className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/PlayCards">Play Cards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">List Cards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/add">Add Card</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <div className="container mt-4">
      <Router>
        <Route path="/" component={ListCards} />
        <Route path="/add" component={AddCard} />
        <Route path="/edit/:id" component={EditCard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/delete/:id" component={ConfirmDelete} />
        <Route path="/PlayCards" component={PlayCards} />
      </Router>
    </div>

  </>
}

export default App;