function SearchForm(props) {
  return (
    <div className="p-2 mb-2 border border-danger">
      <h5>Book Search</h5>
      <form onSubmit={props.handleSubmit}>
        <input className="mb-1 col-12" type="text" id="book_query" name="book_query" 
               onChange={props.handleChange} value={props.value} />
        <div className="text-right">
          <button type="submit" className="btn btn-outline-danger"
                  disabled={props.value.trim()===''}>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;