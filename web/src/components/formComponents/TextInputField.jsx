import textFieldStyle from "./textFieldStyle";
export default function TextInputField({
  label = "",
  type = "text",
  name,
  placeholder,
  className = "",
}) {
  // if (label) return <label></label>

  return (
    <label className={textFieldStyle + " " + className}>
      {label && <span className="label">{label}</span>}
      <input
        type={type}
        name={name}
        className="outline-0"
        placeholder={placeholder}
      />
    </label>
  );
}
