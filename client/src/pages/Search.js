import SearchForm from '../components/SearchForm';
import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import React, {useState, useEffect} from 'react';
import { saveBook, searchBooks } from '../utils/API';

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
    setSearchList([]); // clear old results
    setShowList(true);
    searchBooks(searchQuery, setSearchList);
    setSearchQuery('');
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
  }

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} value={searchQuery} />
      {showList &&
        <ListContainer>
          {searchList.length===0
            ? <p>No results found.</p>
            : searchList.map(book => <ListItem onClick={() => handleClick(book._id)} btnAction="Save"
                                               disabled={book.saved} key={book._id} item={book} />)
          }
        </ListContainer>
      }
    </>
  );
}

export default Search;