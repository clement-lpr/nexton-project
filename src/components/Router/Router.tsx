import NextNoContent from "@components/NoContent";
import Offers from "@pages/offers";
import { Route, Routes } from "react-router-dom";

const NextRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Offers />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profiles" element={<NextNoContent />} />
      </Routes>
    </>
  );
};

export default NextRouter;
