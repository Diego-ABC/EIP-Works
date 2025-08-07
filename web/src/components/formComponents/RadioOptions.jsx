import classMerge from "@/lib/utils/stylings/classMerge";

export default function RadioOptions({ className, name, label, options = [] }) {
  return (
    <div
      className={classMerge(
        className,
        "px-4 rounded-lg bg-base-200 flex flex-row items-center gap-4"
      )}
    >
      <p className="font-medium">{label}</p>
      {options.map((option) => (
        <label className="flex flex-row items-center gap-2" key={option}>
          <input
            type="radio"
            className="radio radio-sm checked:radio-success peer"
            name={name}
            value={option}
          />
          <span className="peer-checked:text-success transition-colors cursor-pointer">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
}
