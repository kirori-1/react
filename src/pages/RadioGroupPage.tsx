// 要件実装：1つのページで複数のRadioGroupを含み、以下をサポート:
// 1. 各グループ全体の無効化(isAllDisabled)を設定
// 2. 各グループの特定オプションを個別無効化(disabled)
// 3. 共通の送信ボタンを用いて、複数のRadioグループの選択値を一括送信
//
// 以下の例では2つのRadioGroupを使ったさまざまなオプションと無効化を説明します。
// さらにグループが必要な場合は、自由にコピーして拡張できます。

import React, { useState } from "react";
import RadioGroup from "../components/form/RadioGroup";

function RadioGroupPage() {
  // 第一组
  const [selectedValueGroup1, setSelectedValueGroup1] = useState("option2");
  const [isAllDisabledGroup1, setIsAllDisabledGroup1] = useState(false);
  const [isSingleDisabledGroup1, setIsSingleDisabledGroup1] = useState(true);

  const radioOptionsGroup1 = [
    { label: "オプション1", value: "option1", disabled: isSingleDisabledGroup1 },
    { label: "オプション2", value: "option2" },
    { label: "オプション3", value: "option3" },
  ];

  // 第二组
  const [selectedValueGroup2, setSelectedValueGroup2] = useState("A");
  const [isAllDisabledGroup2, setIsAllDisabledGroup2] = useState(false);
  const [isSingleDisabledGroup2, setIsSingleDisabledGroup2] = useState(false);

  const radioOptionsGroup2 = [
    { label: "オプションA", value: "A" },
    { label: "オプションB", value: "B", disabled: isSingleDisabledGroup2 },
    { label: "オプションC", value: "C" },
  ];

  // 提交事件，收集多组Radio的选中值
  const handleSubmit = () => {
    const submittedData = {
      group1Selected: selectedValueGroup1,
      group2Selected: selectedValueGroup2,
    };
    // 可以在这里调用API，将submittedData传给后端
    console.log("提交的Radio选中值：", submittedData);
    alert(JSON.stringify(submittedData, null, 2));
  };

  return (
    <div style={{ padding: "16px" }}>
      <h2>RadioGroup</h2>
      {/* 第一组 */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          marginBottom: "12px",
        }}
      >
        <p>今せられる：{selectedValueGroup1}</p>
        <RadioGroup
          name="group1"
          controlledValue={selectedValueGroup1}
          onChange={setSelectedValueGroup1}
          initialFontColor="black"
          initialSize="100px"
          initialFontSize="16px"
          initialColor="white"
          options={radioOptionsGroup1}
          isVisible={true}
          isAllDisabled={isAllDisabledGroup1}
        />
        <div style={{ marginTop: "8px" }}>
          <button onClick={() => setIsAllDisabledGroup1((prev) => !prev)}>
            全部を無効する
          </button>
          <button
            onClick={() => setIsSingleDisabledGroup1((prev) => !prev)}
            style={{ marginLeft: "8px" }}
          >
            1を無効する
          </button>
        </div>
      </div>

      {/* 第二组 */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          marginBottom: "12px",
        }}
      >
        <p>今せられる：{selectedValueGroup2}</p>
        <RadioGroup
          name="group2"
          controlledValue={selectedValueGroup2}
          onChange={setSelectedValueGroup2}
          initialFontColor="black"
          initialSize="100px"
          initialFontSize="16px"
          initialColor="lightgray"
          options={radioOptionsGroup2}
          isVisible={true}
          isAllDisabled={isAllDisabledGroup2}
        />
        <div style={{ marginTop: "8px" }}>
          <button onClick={() => setIsAllDisabledGroup2((prev) => !prev)}>
            全部を無効する
          </button>
          <button
            onClick={() => setIsSingleDisabledGroup2((prev) => !prev)}
            style={{ marginLeft: "8px" }}
          >
            Bを無効する
          </button>
        </div>
      </div>

      {/* 提交所有组的数据 */}
      <button onClick={handleSubmit} style={{ marginTop: "12px" }}>
        提交多组Radio
      </button>
    </div>
  );
}

export default RadioGroupPage;
