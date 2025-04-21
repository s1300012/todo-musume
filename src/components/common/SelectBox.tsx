import Select, { SingleValue } from "react-select";

export type Option = {
  label: string;
  value: string | number;
};

type Props = {
  value: string | number;
  onChange: (value: string | number) => void;
  options: Option[];
  className?: string;
  placeholder?: string;
};

const SelectBox = ({ value, onChange, options, className = "", placeholder }: Props) => {
  const selected = options.find((opt) => opt.value === value) || null;

  const handleChange = (option: SingleValue<Option>) => {
    if (option) onChange(option.value);
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-2 ${className}`}>
      <Select
        options={options}
        value={selected}
        onChange={handleChange}
        className="w-full"
        classNamePrefix="react-select"
        placeholder={placeholder}
        styles={{
          control: (base, state) => ({
            ...base,
            padding: "0.5rem 0.75rem",
            borderRadius: "0.5rem",
            borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
            boxShadow: state.isFocused ? "0 0 0 2px rgba(59, 130, 246, 0.5)" : "none",
            '&:hover': { borderColor: "#3b82f6" },
            minHeight: "40px",
          }),
          valueContainer: (base) => ({
            ...base,
            padding: 0,
          }),
        }}
      />
    </div>
  );
};

export default SelectBox;
