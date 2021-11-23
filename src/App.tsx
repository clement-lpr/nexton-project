import Offers from "pages/offers";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="offers" element={<Offers />} />
      </Routes>
    </>
  );
};

export default App;
