// src/components/RadioBox.tsx
import React, { useState } from "react";

interface RadioBoxProps {
  initialColor: string;
  initialFontColor: string;
  initialSize: string;
  initialFontSize: string;
  isActive: boolean;
  isVisible: boolean;
  initialValue: string;
}

const RadioBox: React.FC<RadioBoxProps> = ({
  initialColor,
  initialFontColor,
  initialSize,
  initialFontSize,
  isActive,
  isVisible,
  initialValue,
}) => {
  const [color, setColor] = useState(initialColor);
  const [fontColor, setFontColor] = useState(initialFontColor);
  const [size, setSize] = useState(initialSize);
  const [fontSize, setFontSize] = useState(initialFontSize);
  const [active, setActive] = useState(isActive);
  const [visible, setVisible] = useState(isVisible);
  const [value, setValue] = useState(initialValue);

  // 在RadioBox组件中
  const fetchData = async () => {
    const response = await fetch("/api/data");
    const data = await response.json();
    setValue(data.value);
  };

  const submitData = async () => {
    await fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });
  };

  if (!visible) return null;

  return (
    <div
      style={{
        backgroundColor: color,
        color: fontColor,
        fontSize,
        width: size,
        height: size,
      }}
    >
      <input
        type="radio"
        checked={active}
        onChange={() => setActive(!active)}
        value={value}
      />
      <button onClick={() => setColor("blue")}>Change Color</button>
      <button onClick={() => setFontColor("red")}>Change Font Color</button>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      <button onClick={() => setValue("newValue")}>Change Value</button>
    </div>
  );
};

export default RadioBox;
