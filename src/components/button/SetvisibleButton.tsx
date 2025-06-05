import { useState } from "react";

const SetvisibleButton = ({ isVisible }: { isVisible: boolean }) => {
  const [visible, setVisible] = useState(isVisible);

  return (
    <div style={{ display: visible ? "block" : "none" }}>
      <button onClick={() => setVisible(!visible)}>Set Visible</button>
    </div>
  );
};
export default SetvisibleButton;
