function fetchJSON(url, method='get', data={}) {
  let settings = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (method === 'post' || method === 'put') {
    settings.body = JSON.stringify(data);
  }
  return fetch(url, settings).then(res => res.json());
}

function searchBooks(query) {
  return fetchJSON(`/api/googlebooks?q=${query}`);
}

function getBooks() {
  return fetchJSON('/api/books');
}

function deleteBook(id) {
  return fetchJSON(`/api/books/${id}`, 'delete');
}

function saveBook(bookInfo) {
  return fetchJSON('/api/books', 'post', bookInfo);
}

const API = { searchBooks, getBooks, deleteBook, saveBook }
export default API;

