import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SecondLevelMenu from "./pages/SecondLevelMenu";
import RadioGroupPage from "./pages/RadioGroupPage";
import FormPage from "./pages/FormPage";
import ListAndTablePage from "./pages/ListAndTablePage";
// // import RadioBox from "./components/form/RadioBox";
// import FontColorPage from "./pages/FontColorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/index" />} />
        <Route path="/index" element={<SecondLevelMenu />} />
        <Route path="/radiogroup" element={<RadioGroupPage />} />
        <Route path="/formpage" element={<FormPage />} />
        <Route path="/listpage" element={<ListAndTablePage />} />
      </Routes>
    </Router>
    // const [count, setCount] = useState(0);
    // const [showFontColorPage, setShowFontColorPage] = useState(false);
  );
}

export default App;
