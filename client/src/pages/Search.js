import SearchForm from '../components/SearchForm';
import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import React, {useState, useEffect} from 'react';
import { searchBooks } from '../utils/API';

function Search() {
  const [searchList, setSearchList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showList, setShowList] = useState(false);

  // useEffect(function() {
  //   setSearchList(searchBooks());
  // }, []);

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setShowList(true);
    setSearchList(searchBooks(searchQuery));
    setSearchQuery('');
  }

  function handleClick(evt) {
  }

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} value={searchQuery} />
      {showList &&
        <ListContainer>
          {searchList.length===0
            ? <p>No results found.</p>
            : searchList.map(book => <ListItem onClick={handleClick} btnAction="Save"
                                              key={book.id} item={book} />)
          }
        </ListContainer>
      }
    </>
  );
}

export default Search;