function searchBooks(query, cb) {
  fetch(`/api/googlebooks?q=${query}`)
  .then(res => res.json())
  .then(res => cb(res))
  .catch(err => {
    console.log('[searchBooks] err=', err);
    cb([]);
  });
}

function getBooks(cb) {
  fetch('/api/books')
  .then(res => res.json())
  .then(res => cb(res))
  .catch(err => {
    console.log('[getBooks] err=', err);
    cb([]);
  });
}

const noop = function(val){}; // do nothing.

function deleteBook(id, cb = noop) {
  let settings = {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' }
  }
  fetch(`/api/books/${id}`, settings)
  .then(res => res.json())
  .then(res => cb(res))
  .catch(err => {
    console.log('[deleteBook] err=', err);
    cb([]);
  });
}

function saveBook(bookInfo, cb = noop) {
  let settings = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookInfo)
  }
  fetch('/api/books', settings)
  .then(res => res.json())
  .then(res => cb(res))
  .catch(err => {
    console.log('[saveBook] err=', err);
    cb([]);
  });
}

export { searchBooks, getBooks, deleteBook, saveBook };

