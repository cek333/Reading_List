import ListContainer from '../components/ListContainer';
import ListItem from '../components/ListItem';

function Saved() {

  function handleClick(evt) {
  }

  return (
    <ListContainer>
      <ListItem onClick={handleClick} action="Delete" />
    </ListContainer>
  );
}

export default Saved;