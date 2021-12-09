import NextNoContent from "@components/common/no-content";
import NextOffers from "@pages/offers";
import NextProfiles from "@pages/profiles";
import { Route, Routes } from "react-router-dom";

const NextRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NextOffers />} />
        <Route path="/offers" element={<NextOffers />} />
        <Route path="/profiles" element={<NextProfiles />} />
        <Route path="*" element={<NextNoContent />} />
      </Routes>
    </>
  );
};

export default NextRouter;
