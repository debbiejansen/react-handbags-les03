function Button(props) {
    function handleClick() {
        if (!props.disabled) {
            props.onClick(props.title);
        }
    }
    return (
        <button
            type="button"
            disabled={props.disabled}
            onClick={handleClick}
        >
            {props.title}
        </button>
    );
}
export default Button;