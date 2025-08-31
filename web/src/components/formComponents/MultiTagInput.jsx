import { useState, useRef } from "react";
import { useTextField } from "react-aria";
import textFieldStyle from "./textFieldStyle";
import { XIcon } from "@phosphor-icons/react";

// These are for when the colors are better picked to help distinguish different items
// // simple deterministic hash
// function hashString(str) {
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     hash = (hash << 5) - hash + str.charCodeAt(i);
//     hash |= 0; // force 32-bit int
//   }
//   return Math.abs(hash);
// }

// const BTN_COLORS = [
//   "btn-primary",
//   "btn-accent",
//   "btn-info",
//   "btn-success",
//   "btn-warning",
// ];

// const BADGE_COLORS = [
//   "badge-primary",
//   "badge-accent",
//   "badge-info",
//   "badge-success",
//   "badge-warning",
// ];

// function colorForButton(tag) {
//   const idx = hashString(tag) % BTN_COLORS.length;
//   return BTN_COLORS[idx];
// }
// function colorForBadge(tag) {
//   const idx = hashString(tag) % BTN_COLORS.length;
//   return BADGE_COLORS[idx];
// }

export default function MultiTagInput({
  name,
  suggestions = [],
  label,
  defaultTags = [],
  containerClassName = "",
}) {
  const [tags, setTags] = useState(defaultTags);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const filtered = suggestions.filter(
    (opt) =>
      opt.toLowerCase().includes(inputValue.toLowerCase()) &&
      !tags.includes(opt)
  );

  const { inputProps } = useTextField(
    {
      value: inputValue,
      onChange: setInputValue,
      placeholder: "Add a service...",
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (filtered.length > 0) {
            addTag(filtered[0]);
          }
          return;
        }
        if (e.key === "Backspace" && !inputValue && tags.length > 0) {
          // remove last tag when backspacing
          removeTag(tags.length - 1);
        }
      },
      onFocus: (e) => setOpen(true),
      "aria-label": label,
    },
    inputRef
  );

  function addTag(tag) {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setInputValue("");
    }
  }

  function removeTag(index) {
    setTags(tags.filter((_, i) => i !== index));
  }

  return (
    <div
      className={"dropdown min-h-fit " + containerClassName}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className={
          "flex flex-row flex-wrap items-center gap-1 p-2 w-full min-h-fit " +
          textFieldStyle
        }
      >
        {tags.map((tag, i) => (
          <span
            key={tag}
            className={
              "badge items-center border-0 flex flex-row px-1 py-0 bg-base-content text-neutral-content"
            }
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(i)}
              className="btn btn-accent btn-ghost btn-xs p-0.5 h-auto shadow-none border-0"
            >
              <XIcon weight="bold" />
            </button>
          </span>
        ))}
        <input
          {...inputProps}
          ref={inputRef}
          className="w-auto min-w-16 basis-0 grow"
        />
      </div>

      {/* hidden input so it works with HTML forms / Firestore */}
      <input type="hidden" name={name} value={JSON.stringify(tags)} />
      {open && filtered.length > 0 && (
        <div className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-auto flex flex-row flex-wrap gap-1">
          {filtered.map((s) => (
            <button
              type="button"
              onClick={() => addTag(s)}
              className={
                "text-left btn btn-xs border-0 shadow-none bg-base-200 hover:bg-base-300"
              }
              key={s}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
