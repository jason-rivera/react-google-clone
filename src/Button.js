import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <a href={props.url}>
        <button type="button" className="btn">
          {props.name}
        </button>
      </a>
    </div>
  );
};

export default Button;
