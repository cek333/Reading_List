import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../pages/SearchSlice';

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const trimQuery = searchQuery.trim();
    if (trimQuery.length > 0) {
      await dispatch(searchBooks(trimQuery));
      setSearchQuery('');
    }
  }

  return (
    <div className="p-2 mb-2 border border-danger">
      <h5>Book Search</h5>
      <form onSubmit={handleSubmit}>
        <input className="mb-1 col-12" type="text" id="book_query" name="book_query" 
               onChange={handleChange} value={searchQuery} />
        <div className="text-right">
          <button type="submit" className="btn btn-outline-danger"
                  disabled={searchQuery.trim()===''}>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;