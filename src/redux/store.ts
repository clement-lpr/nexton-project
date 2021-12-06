import offerReducer from "@pages/offers/offers.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    offers: offerReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
