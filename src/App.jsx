import { Route, Routes } from "react-router-dom";
import Clubs from "./pages/Clubs";
import Faq from "./pages/Faq";

function App() {
  return (
    <>
      <Routes>
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
