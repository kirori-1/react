import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import SecondLevelMenu from "./pages/SecondLevelMenu";
import RadioGroupPage from "./pages/RadioGroupPage";
import FormPage from "./pages/FormPage";
import ListAndTablePage from "./pages/ListAndTablePage";
import DocumentPage from "./pages/DocumentPage";
// // import RadioBox from "./components/form/RadioBox";
// import FontColorPage from "./pages/FontColorPage";

function App() {
  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/index" />} />
          <Route path="/index" element={<SecondLevelMenu />} />
          <Route path="/radiogroup" element={<RadioGroupPage />} />
          <Route path="/formpage" element={<FormPage />} />
          <Route path="/listpage" element={<ListAndTablePage />} />
          <Route path="/documentpage" element={<DocumentPage />} />
        </Routes>
      </Router>
    </MainLayout>
    // const [count, setCount] = useState(0);
    // const [showFontColorPage, setShowFontColorPage] = useState(false);
  );
}

export default App;
