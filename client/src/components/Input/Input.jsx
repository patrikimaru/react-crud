import "./Input.css";

export default function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

