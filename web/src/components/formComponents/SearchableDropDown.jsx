import { useState } from "react";
import textFieldStyle from "./textFieldStyle";
import {
  ArrowDownIcon,
  CaretLineDownIcon,
  TriangleIcon,
} from "@phosphor-icons/react";
export default function SearchableDropDown({
  options,
  name,
  placeholder,
  leftLabel,
  rightLabel,
  className,
  required,
}) {
  const [inputValue, setInputValue] = useState("");
  // const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  // const [filtered, setFiltered] = useState(options);
  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (value) => {
    setInputValue(value);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev <= 0 ? filtered.length - 1 : prev - 1));
    }

    if ((e.key === "Enter" || e.key === " ") && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <div className={"dropdown " + className}>
      <label
        className={
          textFieldStyle +
          " w-full " +
          (required ? "[&:has(input:invalid)]:border-b-red-500" : "")
        }
      >
        {leftLabel && <span className="label">{leftLabel}</span>}
        <input
          type="text"
          tabIndex={0}
          value={inputValue}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          // className="input input-bordered w-full"
          // className={textFieldStyle}
          required={required}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setInputValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setOpen(true);
            setInputValue("");
          }}
          onBlur={() => setTimeout(() => setOpen(false), 100)} // Delay so clicks register
        />
        <CaretLineDownIcon width={"2rem"} weight="fill" />
        {rightLabel && <span className="label">{rightLabel}</span>}
      </label>
      {open && filtered.length > 0 && (
        <div className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-auto flex flex-col gap-1">
          {filtered.map((item, idx) => (
            <button
              key={item}
              type="button"
              onMouseDown={() => handleSelect(item)}
              onMouseOver={() => setSelectedIndex(idx)}
              className={`btn btn-ghost justify-start font-medium ${
                idx === selectedIndex ? "bg-primary text-primary-content" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
