import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import React, {useEffect, useState} from 'react';
import { getBooks, deleteBook } from '../utils/API';

function Saved() {
  const [savedList, setSavedList] = useState([]);

  useEffect(function() {
    getBooks(setSavedList);
  }, []);

  function handleClick(id) {
    deleteBook(id);
    getBooks(setSavedList);
  }

  return (
    <ListContainer>
      {savedList.length===0
        ? <p>No results found.</p>
        : savedList.map(book => <ListItem onClick={() => handleClick(book._id)} btnAction="Delete"
                                          disabled={false} key={book._id} item={book} />)
      }
    </ListContainer>
  );
}

export default Saved;