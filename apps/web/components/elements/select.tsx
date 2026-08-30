'use client';

type SelectProps = {
  selectID: string;
  label: string;
  options: {
    value: string;
    text: string;
  }[];
  placeholder?: string;
  onChange: (value: string) => void;
};

export function Select({
  selectID,
  label,
  options,
  placeholder,
  onChange,
}: SelectProps) {
  if (options.length < 1) return null;

  const defaultValue = placeholder ? '' : options[0].value;
  return (
    <>
      <label className="sr-only" htmlFor={selectID}>
        {label}
      </label>
      <select
        className="select"
        name={selectID}
        id={selectID}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </>
  );
}

Select.displayName = 'Select';
