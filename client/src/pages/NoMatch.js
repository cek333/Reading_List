import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div className="px-3 pt-md-2 pb-md-2 mx-auto mb-2 text-center border border-danger">
      <h1>404 Page Not Found</h1>
      <Link to="/search">Click here to go to the main page.</Link>
    </div>
  );
}

export default NoMatch;