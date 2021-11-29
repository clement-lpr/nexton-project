import NextNoContent from "@components/common/no-content";
import NextOffers from "@pages/offers";
import { Route, Routes } from "react-router-dom";

const NextRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NextOffers />} />
        <Route path="/offers" element={<NextOffers />} />
        <Route path="/profiles" element={<NextNoContent />} />
        <Route path="*" element={<NextNoContent />} />
      </Routes>
    </>
  );
};

export default NextRouter;
