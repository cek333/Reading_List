import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import React, {useEffect, useState} from 'react';
import { getBooks, deleteBook } from '../utils/API';

function Saved() {
  const [savedList, setSavedList] = useState([]);

  // 'No results found' is temporarily displayed before API call completes,
  //   causing an on-screen glitch.
  //   Use showList to suppress 'No results found' until API call complete.
  const [showList, setShowList] = useState(false);

  useEffect(function() {
    getBooks((res) => {
      setSavedList(res);
      setShowList(true);
    });
  }, []);

  function handleClick(id) {
    deleteBook(id, (res)=> {
      // When delete operation complete, get updated list of books
      getBooks(setSavedList);
    });
  }

  return (
    <ListContainer>
      {showList &&
        savedList.length===0
        ? <p>No results found.</p>
        : savedList.map(book => <ListItem onClick={() => handleClick(book._id)} btnAction="Delete"
                                          disabled={false} key={book._id} item={book} />)
      }
    </ListContainer>
  );
}

export default Saved;