import React, { useState } from "react";

interface RadioOption {
  label: string;
  value: string;
  checkable: boolean;
}

interface RadioGroupProps {
  initialColor: string;
  initialFontColor: string;
  initialSize: string;
  initialFontSize: string;
  isVisible: boolean;
  initialValue: string;
  initactivable: boolean;
  options: RadioOption[];
  defaultSelected?: string;
  onChange?: (selectedValue: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  initialColor,
  initialFontColor,
  initialSize,
  initialFontSize,
  initactivable,
  isVisible,
  initialValue,
  options,
  defaultSelected,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultSelected
  );
  const [color, setColor] = useState(initialColor);
  const [fontColor] = useState(initialFontColor);
  const [size] = useState(initialSize);
  const [fontSize] = useState(initialFontSize);
  const [fetchedValue, setFetchedValue] = useState<string>("Fetch Data");
  const [isRadioActive, setIsRadioActive] = useState(initactivable);
  const [visible, setVisible] = useState(isVisible);
  const [value, setValue] = useState(initialValue);

  const handleChange = (newVal: string) => {
    setSelectedValue(newVal);
    onChange?.(newVal);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      setValue(data.value);
      setFetchedValue(String(data.value));
      console.log(JSON.stringify({ value }));
    } catch (err) {
      console.error(err);
      setFetchedValue("Fetch failed");
    }
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

  const rgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <div
      style={{
        backgroundColor: color,
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
        flexDirection:"column",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      {options.map((o) => (
        <label key={o.value} style={{ cursor: "pointer" }}>
          <input
            type="radio"
            name="radio-group"
            value={o.value}
            disabled={!isRadioActive}
            checked={selectedValue === o.value}
            onChange={() => handleChange(o.value)}
          />
          {o.label}
        </label>
      ))}

      <button onClick={() => setColor(rgb())}>Change BG Color</button>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      <button onClick={() => setIsRadioActive((prev) => !prev)}>
        {isRadioActive ? "disable RadioBox" : "enable RadioBox"}
      </button>
      <button onClick={fetchData}>{fetchedValue}</button>
      <button onClick={submitData}>Submit Data</button>
    </div>
  );
};

export default RadioGroup;
