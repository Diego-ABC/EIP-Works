import textFieldStyle from "./textFieldStyle";
export default function TextInputField({
  label = "",
  type = "text",
  name,
  placeholder,
  className = "",
  labelRight = false,
}) {
  // if (label) return <label></label>

  return (
    <label className={textFieldStyle + " " + className}>
      {label && !labelRight && <span className="label">{label}</span>}
      <input
        type={type}
        name={name}
        className="outline-0"
        placeholder={placeholder}
      />
      {label && labelRight && <span className="label">{label}</span>}
    </label>
  );
}
