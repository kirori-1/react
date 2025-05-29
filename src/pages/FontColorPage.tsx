import React, { useState } from "react";
import RadioBox from "../components/RadioBox";

/**
 * 这是一个新的页面，用于演示如何在外部控制 RadioBox 的字体颜色
 * 以及其他属性（如大小，是否激活、是否可见等）
 * 也可以扩展更多功能
 */
const FontColorPage: React.FC = () => {
  const [fontColor, setFontColor] = useState("black");

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Font Color Demo</h2>
      <button onClick={() => setFontColor("green")}>Change Font to Green</button>
      <button onClick={() => setFontColor("red")}>Change Font to Red</button>
      <div style={{ marginTop: "1rem" }}>
        <RadioBox
          initialColor="white"
          initialFontColor={fontColor}
          initialSize="120px"
          initialFontSize="14px"
          isActive={false}
          isVisible={true}
          initialValue="ColorTest"
        />
      </div>
    </div>
  );
};

export default FontColorPage;
