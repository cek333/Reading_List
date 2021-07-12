import { useSelector } from 'react-redux';
import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';
import { selectSavedBookIds, selectError, selectStatus } from './SavedSlice';

function Saved() {
  const savedListIds = useSelector(selectSavedBookIds);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);

  let content;
  if (status === 'failed') {
    content = <p>{error}</p>;
  } else {
    if (savedListIds.length === 0) {
      content = <p>No books found</p>;
    } else {
      content = savedListIds.map(id => <ListItem key={id} bookId={id} btnAction="Delete" />);
    }
  }

  return (
    <ListContainer>
      {content}
    </ListContainer>
  );
}

export default Saved;