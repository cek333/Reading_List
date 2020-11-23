import SearchForm from '../components/SearchForm';
import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import React, {useState, useEffect} from 'react';
import { searchBooks } from '../utils/API';

function Search() {
  const [searchList, setSearchList] = useState([]);

  useEffect(function() {
    setSearchList(searchBooks());
  }, []);

  function handleClick(evt) {
  }

  return (
    <>
      <SearchForm />
      <ListContainer>
        {searchList.length===0
          ? <p>No results found.</p>
          : searchList.map(book => <ListItem onClick={handleClick} btnAction="Save"
                                             key={book.id} item={book} />)
        }
      </ListContainer>
    </>
  );
}

export default Search;