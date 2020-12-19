import SearchForm from '../components/SearchForm';
import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import React, {useState, useEffect} from 'react';
import { saveBook, searchBooks } from '../utils/API';

function Search() {
  const [searchList, setSearchList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showList, setShowList] = useState(false);

  useEffect(function() {
    let storedSearch;
    if (sessionStorage.getItem('rl-gbs')) {
      storedSearch = JSON.parse(sessionStorage.getItem('rl-gbs'));
      setSearchList(storedSearch);
      setShowList(true);
    }
  }, []);

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    searchBooks(searchQuery, (res) => {
      setSearchList(res);
      sessionStorage.setItem('rl-gbs', JSON.stringify(res));
      setShowList(true);
      setSearchQuery('');
    });
  }

  function handleClick(id) {
    let bookToSave;
    // Toggle saved property for book
    // Also save reference to book in 'bookToSave'
    let updatedList = searchList.map(book => {
      if (book._id===id) {
        bookToSave = {...book};
        bookToSave.saved = true;
        return bookToSave;
      } else {
        return book;
      }
    });
    saveBook(bookToSave);
    setSearchList(updatedList);
    sessionStorage.setItem('rl-gbs', JSON.stringify(updatedList));
  }

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} value={searchQuery} />
      {showList &&
        <ListContainer>
          {searchList.length===0
            ? <p>No results found.</p>
            : searchList.map((book,idx) => <ListItem onClick={() => handleClick(book._id)} btnAction="Save"
                                               disabled={book.saved} key={`${idx}-${book._id}`} item={book} />)
          }
        </ListContainer>
      }
    </>
  );
}

export default Search;