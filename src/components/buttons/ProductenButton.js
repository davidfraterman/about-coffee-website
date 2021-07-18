import "./ProductenButton.css";

const Button = (props) => {
    return (
        <button className="buy-button" type={props.type}>
            {props.children}
        </button>
    )
}

export default Button