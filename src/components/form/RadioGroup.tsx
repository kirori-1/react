import React, { useState } from "react";

interface RadioOption {
  label: string;
  value: string; // 选项自身的值
}

interface RadioGroupProps {
  name: string;
  //  样式相关
  initialColor: string;
  initialFontColor: string;
  initialSize: string;
  initialFontSize: string;

  // 控制选中状态
  controlledValue?: string; // 外部控制的选中值（受控模式）// 当前选中的选项值
  defaultValue?: string; //非受控初始化时的默认值（仅初始化一次）

  //功能相关
  options: RadioOption[];
  onChange?: (selectedValue: string) => void;
  isVisible?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  controlledValue,
  initialFontColor,
  initialSize,
  initialFontSize,
  onChange,
  options,
  isVisible = true,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );
  if (!isVisible) {
    return null;
  }

  const fontColor = initialFontColor;
  const size = initialSize;
  const fontSize = initialFontSize;

  const isControlled = controlledValue !== undefined;
  const selected = isControlled ? controlledValue : selectedValue;

  const handleChange = (newVal: string) => {
    if (!isControlled) setSelectedValue(newVal);
    onChange?.(newVal);
  };

  const submitData = async () => {
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: selected }),
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
            name={name}
            value={o.value}
            checked={selected === o.value}
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
