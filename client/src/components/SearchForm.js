function SearchForm() {
  return (
    <div className="p-2 mb-2 border border-danger">
      <h5>Book Search</h5>
      <form>
        <input className="mb-1 col-12" type="text" id="book_query" name="book_query" value="XXX" />
        <div className="text-right">
          <button type="submit" className="btn btn-outline-danger">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;