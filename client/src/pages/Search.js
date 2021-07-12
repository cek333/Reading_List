import { useSelector } from 'react-redux';
import SearchForm from '../components/SearchForm';
import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import { selectSearchResultIds, selectSearchTerm, selectError, selectStatus } from './SearchSlice';

function Search() {
  const searchListIds = useSelector(selectSearchResultIds);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);
  const query = useSelector(selectSearchTerm);
  const showList = (status !== 'loading') && (query.length > 0);

  let content;
  if (status === 'failed') {
    content = <p>{error}</p>;
  } else {
    if (searchListIds.length === 0) {
      content = <p>No results found</p>
    } else {
      content = searchListIds.map(id => <ListItem key={id} bookId={id} btnAction="Save" />);
    }
  }

  return (
    <>
      <SearchForm />
      {showList &&
        <ListContainer>
          {content}
        </ListContainer>
      }
    </>
  );
}

export default Search;