import React, { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface CheckBoxGroupProps {
  options: Option[];
  defaultSelected?: string[];
  onChange?: (selectedValues: string[]) => void;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  options,
  defaultSelected = [],
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultSelected);

  const handleCheckboxChange = (val: string) => {
    let newSelected: string[];
    if (selectedValues.includes(val)) {
      newSelected = selectedValues.filter((item) => item !== val);
    } else {
      newSelected = [...selectedValues, val];
    }
    setSelectedValues(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {options.map((o) => (
        <label key={o.value}>
          <input
            type="checkbox"
            checked={selectedValues.includes(o.value)}
            onChange={() => handleCheckboxChange(o.value)}
          />
          {o.label}
        </label>
      ))}
    </div>
  );
};

export default CheckBoxGroup;
