import classnames from 'classnames';

function ActionButton(props) {
  const buttonClasses = classnames('btn', 'float-right', 'ml-1',
    { 'btn-info': props.disabled }, // use solid button to indicate disabled
    { 'btn-outline-info': !props.disabled } // use outline button for enabled
  );

  return (
    <button type="button"
            className={buttonClasses}
            onClick={props.onClick} disabled={props.disabled}>{props.action}</button>
  );
}

export default ActionButton;