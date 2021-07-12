import { useSelector, useDispatch } from 'react-redux';
import { selectSearchResultById } from '../pages/SearchSlice';
import { selectSavedBookById, addBook, deleteBook } from '../pages/SavedSlice';
import ViewLink from './ViewLink';
import ActionButton from './ActionButton';

function ListItem(props) {
  const { bookId, btnAction } = props;
  const dispatch = useDispatch();
  // Note: for searchList btnAction='Save'; for savedList btnAction='Delete'
  const book = useSelector(state =>
    btnAction === 'Save'
    ? selectSearchResultById(state, bookId)
    : selectSavedBookById(state, bookId)
  );
  // Items in searchList have 'saved' property used to enable/disable ActionButton
  //   For savedList the ActionButton is never disabled
  let btnDisabled;
  let btnHandler;
  if (btnAction === 'Save') {
    btnDisabled = book.saved;
    btnHandler = () => dispatch(addBook(book));
  } else {
    btnDisabled = false;
    btnHandler = () => dispatch(deleteBook(bookId));
  }

  return (
    <div className="book-item border border-primary mb-1 p-1">
      <ActionButton onClick={btnHandler} action={btnAction} disabled={btnDisabled} />
      <ViewLink href={book.link} />
      <h6>{book.title}</h6>
      {book.authors.length!==0 &&
        <p>Written by {book.authors.length===1
                        ? book.authors[0]
                        : book.authors.join(' & ')}</p>
      }
      <div className="d-flex">
        <img src={book.image} alt='book cover'
            style={{objectFit: 'contain'}} className="img-fluid mr-2" />
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default ListItem;