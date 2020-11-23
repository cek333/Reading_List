import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import React, {useEffect, useState} from 'react';
import { getBooks } from '../utils/API';

function Saved() {
  const [savedList, setSavedList] = useState([]);

  useEffect(function() {
    setSavedList(getBooks());
  }, []);

  function handleClick(evt) {
  }

  return (
    <ListContainer>
      {savedList.length===0
        ? <p>No results found.</p>
        : savedList.map(book => <ListItem onClick={handleClick} btnAction="Delete"
                                          key={book.id} item={book} />)
      }
    </ListContainer>
  );
}

export default Saved;