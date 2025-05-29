import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RadioBox from "./components/RadioBox";
import FontColorPage from "./pages/FontColorPage";

function App() {
  const [count, setCount] = useState(0);
  const [showFontColorPage, setShowFontColorPage] = useState(false);

  if (showFontColorPage) {
    return <FontColorPage />;
  }

  return (
    <>
      <button onClick={() => setShowFontColorPage(true)}>
        Go to FontColorPage
      </button>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card" style={{ display: "flex" }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RadioBox
          initialColor="lightgray"
          initialFontColor="black"
          initialSize="100px"
          initialFontSize="16px"
          isVisible={true}
          initialValue="default"
          initactivable={false}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
