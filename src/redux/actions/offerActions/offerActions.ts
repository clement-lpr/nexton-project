import Offer from "@models/offers.model";
import { createAction } from "@reduxjs/toolkit";

export const createOffer = createAction<Offer>("offer/create");
