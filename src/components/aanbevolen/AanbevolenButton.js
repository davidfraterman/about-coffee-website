import "./AanbevolenButton.css";

const Button = (props) => {
  return (
    <button className="aanbevolen-button" type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
