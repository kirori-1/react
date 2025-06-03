import { useState } from "react";
import "./App.css";
// // import RadioBox from "./components/RadioBox";
// import FontColorPage from "./pages/FontColorPage";
import RadioGroup from "./components/RadioGroup";

function App() {
  // const [count, setCount] = useState(0);
  // const [showFontColorPage, setShowFontColorPage] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option2");
  const radioOptions = [
    { label: "a", value: "option1", checkable: true },
    { label: "b", value: "option2", checkable: true },
    { label: "c", value: "option3", checkable: true },
  ];

  const handleRadioChange = (newVal: string) => {
    setSelectedValue(newVal);
    console.log("what you choose :", newVal);
  };

  // if (showFontColorPage) {
  //   return <FontColorPage />;
  // }

  return (
    <>
      {/* <button onClick={() => setShowFontColorPage(true)}>
        Go to FontColorPage
      </button> */}

      {/* <div className="card" style={{ display: "flex" }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <RadioGroup
          initialFontColor="black"
          initialSize="100px"
          initialFontSize="16px"
          initialColor="lightgray"
          options={radioOptions}
          defaultSelected="option2"
          onChange={handleRadioChange}
          isVisible={true}
          initialValue="default"
          initactivable={true}
        />
      </div>
      <div>
        <p>選択されたのは: {selectedValue}</p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
