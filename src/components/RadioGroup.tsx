import React, { useState } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  defaultSelected?: string;
  onChange?: (selectedValue: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  defaultSelected,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultSelected
  );

  const handleChange = (newVal: string) => {
    setSelectedValue(newVal);
    onChange?.(newVal);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {options.map((o) => (
        <label key={o.value} style={{ cursor: "pointer" }}>
          <input
            type="radio"
            name="radio-group"
            value={o.value}
            checked={selectedValue === o.value}
            onChange={() => handleChange(o.value)}
          />
          {o.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
