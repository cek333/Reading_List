function fetchJSON(url, cb=noop, method='get', data={}) {
  let settings = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (method === 'post' || method === 'put') {
    settings.body = JSON.stringify(data);
  }
  fetch(url, settings)
  .then(res => res.json())
  .then(res => cb(res))
  .catch(err => {
    console.log(`[fetchJSON] url=${url} method=${method} err=`, err);
    cb([]);
  })
}

function searchBooks(query, cb) {
  fetchJSON(`/api/googlebooks?q=${query}`, cb);
}

function getBooks(cb) {
  fetchJSON('/api/books', cb);
}

const noop = (val) => { }; // do nothing.

function deleteBook(id, cb = noop) {
  fetchJSON(`/api/books/${id}`, cb, 'delete');
}

function saveBook(bookInfo, cb = noop) {
  fetchJSON('/api/books', cb, 'post', bookInfo);
}

export { searchBooks, getBooks, deleteBook, saveBook };

