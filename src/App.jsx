import { Route, Routes } from "react-router-dom";
import Clubs from "./pages/Clubs";
import Faq from "./pages/Faq";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
