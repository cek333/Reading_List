function ListContainer({children}) {
  return (
    <div className="p-2 mb-2 border border-warning">
      <h5>Results</h5>
      <div className="book-list">
        {children}
      </div>
    </div>
  );
}

export default ListContainer;