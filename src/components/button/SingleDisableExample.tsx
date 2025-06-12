import React, { useState } from "react";
import RadioGroup from "../form/RadioGroup";

export default function SingleDisableExample() {
  const [isDisabledSingle, setIsDisabledSingle] = useState(false);
  const [allDisabled, setAllDisabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option2");

  const radioOptions = [
    { label: "选项一", value: "option1", disabled: isDisabledSingle },
    { label: "选项二", value: "option2" },
    { label: "选项三", value: "option3" },
  ];

  const handleChange = (newVal: string) => {
    setSelectedValue(newVal);
  };
  return (
    <div
      style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <RadioGroup
        name="single-disable-demo"
        controlledValue={selectedValue}
        initialFontColor="black"
        initialSize="100px"
        initialFontSize="16px"
        initialColor="lightgray"
        options={radioOptions}
        isAllDisabled={allDisabled}
        isVisible={true}
        onChange={handleChange}
      />
      <button onClick={() => setIsDisabledSingle((prev) => !prev)}>
        Toggle Single Option Disabled
      </button>
      <button onClick={() => setAllDisabled((prev) => !prev)}>
        Toggle All Disabled
      </button>
    </div>
  );
}
