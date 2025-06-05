import  { useState } from "react";

interface RadioOption {
  initactivable: boolean;
  checkable: boolean;
}

const SetselectButton :React.FC<RadioOption>= ({
  checkable,
  initactivable,
}) => {
  const [checked, setChecked] = useState(checkable);
  const [isRadioActive, setIsRadioActive] = useState(initactivable);

  return (
    <div>
      <button onClick={() => setIsRadioActive((prev) => !prev)}>
        {isRadioActive ? "disable RadioBox" : "enable RadioBox"}
      </button>
      <button onClick={() => setChecked(!checked)}>Set Select</button>
    </div>
  );
};
export default SetselectButton;
