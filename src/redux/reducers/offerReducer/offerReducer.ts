import Offer from "@models/offers.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OfferState {
  offer: Offer[];
}

const initialState = { offer: [] } as OfferState;

export const offersSlice = createSlice({
  name: "OFFERS",
  initialState,
  reducers: {
    addOffer: (state, action: PayloadAction<Offer>) => {
      state.offer.push(action.payload);
    },
  },
});

const { actions, reducer } = offersSlice;

export const { addOffer } = actions;

export default reducer;
