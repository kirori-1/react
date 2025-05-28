import React, { useState } from "react";

interface RadioBoxProps {
  initialColor: string;
  initialFontColor: string;
  initialSize: string;
  initialFontSize: string;
  isVisible: boolean;
  initialValue: string;
  initactivable: boolean;
}

const RadioBox: React.FC<RadioBoxProps> = ({
  initialColor,
  initialFontColor,
  initialSize,
  initialFontSize,
  isVisible,
  initialValue,
  initactivable,
}) => {
  const [isRadioActive, setIsRadioActive] = useState(initactivable);
  const [color, setColor] = useState(initialColor);
  const [fontColor] = useState(initialFontColor);
  const [size] = useState(initialSize);
  const [fontSize] = useState(initialFontSize);
  const [visible, setVisible] = useState(isVisible);
  const [value, setValue] = useState(initialValue);
  const [selected, setSelected] = useState<string | null>(null);
  const [fetchedValue, setFetchedValue] = useState<string>("Fetch Data");

  const handleClick = () => {
    setSelected((prev) => (prev === value ? null : value));
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      setValue(data.value);
      setFetchedValue(String(data.value));
      console.log(JSON.stringify({ value }));
    } catch (err) {
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

  if (!visible) return null;

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
      }}
    >
      <label>
        <input
          type="radio"
          name="radio-box"
          checked={selected === value}
          onClick={handleClick}
          readOnly
          disabled={!isRadioActive}
        />
        选择项（点击取消）
      </label>

      <button onClick={() => setColor(rgb())}>Change BG Color</button>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      <button onClick={() => setIsRadioActive((prev) => !prev)}>
        {isRadioActive ? "禁用 RadioBox" : "启用 RadioBox"}
      </button>
      <button onClick={fetchData}>{fetchedValue}</button>
      <button onClick={submitData}>Submit Data</button>
    </div>
  );
};

export default RadioBox;
