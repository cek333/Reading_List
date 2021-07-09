import ViewLink from './ViewLink';
import ActionButton from './ActionButton';

function ListItem(props) {
  return (
    <div className="book-item border border-primary mb-1 p-1">
      <ActionButton onClick={props.onClick} action={props.btnAction} disabled={props.disabled} />
      <ViewLink href={props.item.link} />
      <h6>{props.item.title}</h6>
      {props.item.authors.length!==0 &&
        <p>Written by {props.item.authors.length===1
                        ? props.item.authors[0]
                        : props.item.authors.join(' & ')}</p>
      }
      <div className="d-flex">
        <img src={props.item.image} alt='book cover'
            style={{objectFit: 'contain'}} className="img-fluid mr-2" />
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

export default ListItem;