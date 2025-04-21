// src/components/common/ColorSelect.tsx
import Select, { components, SingleValueProps, OptionProps } from "react-select";
import { colorOptions } from "../../utils/constants/color";

type ColorOption = {
  label: string;
  value: string;
};

type Props = {
  value: string;
  onChange: (color: string) => void;
  className?: string; // 呼び出し側で幅など自由に設定できる
  placeholder?: string;
};

// カスタムのオプション表示
const ColourOption = (props: OptionProps<ColorOption>) => (
  <components.Option {...props}>
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: props.data.value }} />
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

// カスタムの選択済み表示
const SingleValue = (props: SingleValueProps<ColorOption>) => (
  <components.SingleValue {...props}>
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: props.data.value }} />
      <span>{props.data.label}</span>
    </div>
  </components.SingleValue>
);

const ColorSelect = ({ value, onChange, className = "", placeholder = "カラーを選択" }: Props) => {
  const selected = colorOptions.find((opt) => opt.value === value) || null;

  return (
    <div className={className}>
      <Select<ColorOption, false>
        options={colorOptions}
        value={selected}
        onChange={(opt) => onChange(opt?.value || "")}
        components={{ Option: ColourOption, SingleValue }}
        className="w-full"
        classNamePrefix="color-select"
        placeholder={placeholder}
        styles={{
          control: (base, state) => ({
            ...base,
            padding: "0.5rem 0.75rem",
            borderRadius: "0.5rem",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
            boxShadow: state.isFocused
              ? "0 0 0 2px rgba(59, 130, 246, 0.5)"
              : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
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

export default ColorSelect;
