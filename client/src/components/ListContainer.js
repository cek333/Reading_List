import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSearchTerm } from '../pages/SearchSlice';

function ListContainer({children}) {
  const { path } = useRouteMatch();
  const searchTerm = useSelector(selectSearchTerm);

  let headingInfo;
  if ((path.indexOf('/search') >= 0) && (searchTerm.length > 0)) {
    headingInfo = `for '${searchTerm}'`;
  }

  return (
    <div className="p-2 mb-2 border border-warning">
      <h5>Results {headingInfo}</h5>
      <div className="book-list">
        {children}
      </div>
    </div>
  );
}

export default ListContainer;