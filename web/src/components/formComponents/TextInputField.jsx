import textFieldStyle from "./textFieldStyle";
export default function TextInputField({
  label = "",
  type = "text",
  name,
  placeholder,
  className = "",
  labelRight = false,
  leftIcon,
  rightIcon,
  required = false,
  onChange = () => {},
  // value = undefined,
}) {
  // if (label) return <label></label>

  return (
    <label className={textFieldStyle + " " + className}>
      {label && !labelRight && <span className="label">{label}</span>}
      {leftIcon && <leftIcon />}
      <input
        type={type}
        name={name}
        className="outline-0"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        // value={value}
      />
      {rightIcon}
      {label && labelRight && <span className="label">{label}</span>}
    </label>
  );
}
