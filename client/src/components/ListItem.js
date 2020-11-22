import ViewLink from './ViewLink';
import ActionButton from './ActionButton';

function ListItem(props) {
  return (
    <div className="book-item border border-primary mb-1 p-1">
      <ActionButton onClick={props.onClick} action={props.action} />
      <ViewLink />
      <h6>Book Title</h6>
      <p>Written by Book Author</p>
      <div className="d-flex">
        <img src="https://via.placeholder.com/100x100" alt='book cover' className="img-fluid mr-2" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at quia inventore a dolores doloremque, veniam reiciendis iste neque odit tempora, sint accusantium libero dolore distinctio ea nobis nulla nihil?</p>
      </div>
    </div>
  );
}

export default ListItem;