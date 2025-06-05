import React, { useState } from "react";

interface RadioProps {
  name: string;
  label: string;

  value: string;
  checked: boolean;
  checkable: boolean;

  onChange: (newVal: boolean) => void;
  isVisible: boolean;
}

const RadioBox: React.FC<RadioProps> = ({
  name,
  value,
  onChange,
  checked,
  checkable,
  isVisible = true,
}) => {
  const [visible, setVisible] = useState(isVisible);
  const [currentValue, setValue] = useState(value);

  const [isDisabled, setCheckable] = useState(checkable);
  const [fetchedValue, setFetchedValue] = useState<string>("Fetch Data");




  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      setValue(data.value);
      setFetchedValue(String(data.value));
      console.log(JSON.stringify({ value }));
    } catch (error) {
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

  if (!visible) return null;

  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value={currentValue}
          checked={checked}
          onChange={() => onChange(!checked)}
          disabled={isDisabled}
        />
        {fetchedValue}
      </label>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      <button onClick={() => setCheckable((checkable) => !checkable)}>
        {!isDisabled ? "禁用 RadioBox" : "启用 RadioBox"}
      </button>
      <button onClick={fetchData}>{fetchedValue}</button>
      <button onClick={submitData}>Submit Data</button>
    </div>
  );
};

export default RadioBox;
