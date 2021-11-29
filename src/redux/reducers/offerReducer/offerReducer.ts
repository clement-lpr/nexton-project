import Offer from "@models/offers.model";
import { createOffer } from "@redux/actions/offerActions/offerActions";
import { createReducer } from "@reduxjs/toolkit";

interface OfferState {
  offer: Offer[];
}

const initialState = { offer: {} } as OfferState;

const offerReducer = createReducer(initialState, (builder) => {
  builder.addCase(createOffer, (state, action) => {
    state.offer.push(action.payload);
  });
});

export default offerReducer;
