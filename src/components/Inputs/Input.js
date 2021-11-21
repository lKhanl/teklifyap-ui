import inputList from "./InputList";

const Input = (props) => {
  let id = "";
  let className = "";
  let type = "";
  inputList.map((obj) => {
    if (obj.placeholder === props.title) {
      id = obj.id;
      className = obj.className;
      type = obj.type;
    }
  });
  return (
    <div className="user-select-none">
      <input
      
      disabled={props.disabled}
        id={id}
        placeholder={props.title}
        className={className}
        type={type}
        required
        onChange={props.enteredValue}
        value={props.inputValue}
        maxLength ={props.maxlength}
      ></input>
    </div>
  );
};

export default Input;
