import offerReducer from "@pages/offers/offers.slice";
import { configureStore } from "@reduxjs/toolkit";
import { offerApi } from "@services/offer";

const store = configureStore({
  reducer: {
    offers: offerReducer,
    [offerApi.reducerPath]: offerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(offerApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
