import { useState } from "react";

const SetcolorButton = ({ initialColor }: { initialColor: string }) => {


const [color, setColor] = useState(initialColor);
  const rgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

    return (
        <div style={{ backgroundColor: color }}>
            <button onClick={() => setColor(rgb())}>Change BG Color</button>
        </div>
    )
}

export default SetcolorButton;