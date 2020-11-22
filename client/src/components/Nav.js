import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom border-primary">
      <h5 className="my-0 mr-md-auto font-weight-bold">Reading List</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink to="/search" className="p-2 text-dark" activeClassName="active">Search</NavLink>
        <NavLink to="/saved" className="p-2 text-dark" activeClassName="active">Saved</NavLink>
      </nav>
    </div>
  );
}

export default Nav;