import Offers from "pages/offers";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="offers" element={<Offers />} />
      </Routes>
    </div>
  );
};

export default App;
