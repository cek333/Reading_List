function ActionButton(props) {
  return (
    <button type="button"
            className={`btn btn-${props.disabled ? '':'outline-'}info float-right ml-1`}
            onClick={props.onClick} disabled={props.disabled}>{props.action}</button>
  );
}

export default ActionButton;