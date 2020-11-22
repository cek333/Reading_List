import React from "react";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom border-primary">
        <h5 className="my-0 mr-md-auto font-weight-bold">Reading List</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark active" href="#">Search</a>
          <a className="p-2 text-dark" href="#">Saved</a>
        </nav>
      </div>
      <div className="container">
        {/* <!-- Header --> */}
        <div className="px-3 pt-md-2 pb-md-2 mx-auto mb-2 text-center border border-success">
          <h1>(React) Reading List</h1>
          <p>Search for and Save Books of Interest (using Google Books)</p>
        </div>
        {/* <!-- Search Box --> */}
        <div className="p-2 mb-2 border border-danger">
          <h5>Book Search</h5>
          <form>
            <input className="mb-1 col-12" type="text" id="book_query" name="book_query" value="XXX" />
            <div className="text-right">
              <button type="submit" className="btn btn-outline-danger">Search</button>
            </div>
          </form>
        </div>
        {/* <!-- Results --> */}
        <div className="p-2 mb-2 border border-warning">
          <h5>Results</h5>
          <div className="book-list">

            <div className="book-item border border-primary mb-1 p-1">
              <a className="btn btn-outline-info float-right ml-1" href="#">View</a>
              <button type="button" className="btn btn-outline-info float-right ml-1">Save</button>
              <h6>Book Title</h6>
              <p>Written by Book Author</p>
              <div className="d-flex">
                <img src="https://via.placeholder.com/100x100" alt='book cover' className="mr-1" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at quia inventore a dolores doloremque, veniam reiciendis iste neque odit tempora, sint accusantium libero dolore distinctio ea nobis nulla nihil?</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
