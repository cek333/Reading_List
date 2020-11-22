function ActionButton(props) {
  return (
    <button type="button" className="btn btn-outline-info float-right ml-1" 
            onClick={props.onClick}>{props.action}</button>
  );
}

export default ActionButton;