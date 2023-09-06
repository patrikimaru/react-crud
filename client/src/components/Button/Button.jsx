import "./Button.css"

export default function Button(props){
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`btn ${props.variant} ${props.size}`}
    >
      {props.children}
    </button>
  )
}

