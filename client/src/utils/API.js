import results from './data'; // sample api search results for local testing

function searchBooks(searchQuery) {
  console.log(`[searchBooks] searchQuery=${searchQuery}`);
  let id, title, authors, description, smallThumbnail, previewLink;
  // construct own book item object
  const bookList = results.items.map(function(book) {
    // destructure api data; assign default value for imageLinks if field missing
    ({id, 
      volumeInfo: {
        title, 
        authors, 
        description, 
        imageLinks: {smallThumbnail} = {smallThumbnail: 'https://via.placeholder.com/125'}, 
        previewLink
      }} = book);
      return ({
        id, title, authors, description, image: smallThumbnail, link: previewLink
      });
  })
  return bookList;
}

function getBooks() {
  // retrieve saved books from database
  let id, title, authors, description, smallThumbnail, previewLink;
  // construct own book item object
  const bookList = results.items.map(function(book) {
    // destructure api data; assign default value for imageLinks if field missing
    ({id, 
      volumeInfo: {
        title, 
        authors, 
        description, 
        imageLinks: {smallThumbnail} = {smallThumbnail: 'https://via.placeholder.com/125'}, 
        previewLink
      }} = book);
      return ({
        id, title, authors, description, image: smallThumbnail, link: previewLink
      });
  })
  return bookList;
}

function deleteBook(id) {
  console.log(`[deleteBook] id=${id}`);
}

function saveBook(bookInfo) {
  console.log(`[saveBook] id=${bookInfo.id} title=${bookInfo.title}`);
}

export { searchBooks, getBooks, deleteBook, saveBook };

