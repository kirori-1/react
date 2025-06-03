import React, { useState } from "react";

interface RadioBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  checkable: boolean;
  isVisible: boolean;
  initialValue: string;
  initactivable: boolean;
}

const RadioBox: React.FC<RadioBoxProps> = ({
  checked,
  onChange,
  checkable,
  isVisible,
  initialValue,
  initactivable,
}) => {
  const [isRadioActive, setIsRadioActive] = useState(initactivable);
  const [visible, setVisible] = useState(isVisible);
  const [value, setValue] = useState(initialValue);

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
          name="radio-box"
          checked={checked}
          onChange={onChange}
          disabled={!checkable}
        />
        check
      </label>
      s<button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      <button onClick={() => setIsRadioActive((prev) => !prev)}>
        {isRadioActive ? "禁用 RadioBox" : "启用 RadioBox"}
      </button>
      <button onClick={fetchData}>{fetchedValue}</button>
      <button onClick={submitData}>Submit Data</button>
    </div>
  );
};

export default RadioBox;
