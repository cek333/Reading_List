import SearchForm from '../components/SearchForm';
import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';

function Search() {

  function handleClick(evt) {
  }

  return (
    <>
      <SearchForm />
      <ListContainer>
        <ListItem onClick={handleClick} action="Save" />
      </ListContainer>
    </>
  );
}

export default Search;