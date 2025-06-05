import React, { useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectBoxProps {
  options: SelectOption[];
  defaultValue?: string;
  onChange?: (selectedValue: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newVal = event.target.value;
    setSelectedValue(newVal);
    onChange?.(newVal);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange} aria-label="Select an option">
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
