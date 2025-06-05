import RadioGroup from "../components/form/RadioGroup";

import { useState } from "react";
function RadioGroupPage() {
  const [selectedValue, setSelectedValue] = useState("option2");
  const [selectedValue2, setSelectedValue2] = useState("A");
  const radioOptions = [
    { label: "a", value: "option1" },
    { label: "b", value: "option2" },
    { label: "c", value: "option3" },
  ];
  const radioOptions2 = [
    { label: "OptionA", value: "A" },
    { label: "OptionB", value: "B" },
  ];

  const handleRadioChange = (newVal: string) => {
    setSelectedValue(newVal);
    console.log("RadioGroup selected :", newVal);
  };
  const handleRadioChange2 = (newVal: string) => {
    setSelectedValue2(newVal);
    console.log("RadioGroup 2 selected:", newVal);
  };

  return (
    // if (showFontColorPage) {
    //   return <FontColorPage />;
    // }

    <>
      {/* <button onClick={() => setShowFontColorPage(true)}>
        Go to FontColorPage
      </button> */}

      {/* <div className="card" style={{ display: "flex" }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div>
            <p>選択されたのは: {selectedValue}</p>
          </div>

          <RadioGroup
            name="1"
            controlledValue={selectedValue}
            initialFontColor="black"
            initialSize="100px"
            initialFontSize="16px"
            initialColor="lightgray"
            options={radioOptions}
            onChange={handleRadioChange}
            isVisible={true}
          />
        </div>
        <div>
          <div>
            <p>選択されたのは: {selectedValue2}</p>
          </div>
          <RadioGroup
            name="2"
            controlledValue={selectedValue2}
            initialColor="gray"
            initialFontColor="black"
            initialSize="100px"
            initialFontSize="16px"
            options={radioOptions2}
            onChange={handleRadioChange2}
            isVisible={true}
          />
        </div>
      </div>

      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}
export default RadioGroupPage;
