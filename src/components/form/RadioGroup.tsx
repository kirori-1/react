import React, { useState } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  initialColor: string;
  initialFontColor: string;
  initialSize: string;
  initialFontSize: string;
  initialValue: string;
  options: RadioOption[];
  defaultSelected?: string;
  onChange?: (selectedValue: string) => void;
  isVisible?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  initialFontColor,
  initialSize,
  initialFontSize,
  onChange,
  initialValue,
  options,
  defaultSelected,
  isVisible = true,
}) => {
  if (!isVisible) {
    return null;
  }
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultSelected
  );

  const [fontColor] = useState(initialFontColor);
  const [size] = useState(initialSize);
  const [fontSize] = useState(initialFontSize);
  const [value] = useState(initialValue);
  const handleChange = (newVal: string) => {
    setSelectedValue(newVal);
    onChange?.(newVal);
  };


  const submitData = async () => {
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });
    const result = await res.json();
    console.log("提交结果：", result);
  };

  return (
    <div
      style={{
        color: fontColor,
        fontSize,
        minWidth: size,
        minHeight: size,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px 24px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        flexWrap: "wrap", // 自动换行
        flexDirection: "column",
      }}
    >
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

 
  
      <button onClick={submitData}>Submit Data</button>
    </div>
  );
};

export default RadioGroup;
