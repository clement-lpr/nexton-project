import NextDialog from "@components/common/dialog";
import { NextOffersForm } from "@components/offers/form/Form";
import NextOffersList from "@components/offers/list";
import NextOfferSarch from "@components/offers/search";
import Offer from "@models/offers.model";
import { Button, Grid } from "@mui/material";
import { useNextDispatch } from "@redux/hook";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useState } from "react";
import { addOffer } from "./offers.slice";

const defaultValues: Offer = {
  abilities: "",
  businessEngineer: "",
  businessUnit: "",
  company: "",
  creationDate: "",
  description: "",
  experience: "",
  jobName: "",
  jobType: "temps plein",
  location: "",
  priority: "",
};

const NextOffers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedValue] = useState(defaultValues);

  const dispatch = useNextDispatch();

  const handleClickOpen = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleClose = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSubmit = (data: Offer) => {
    dispatch(addOffer(data));
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <NextOfferSarch></NextOfferSarch>
      <Grid container spacing={0.5} alignItems="center" justifyContent="center">
        <Grid item xs={5}></Grid>
        <Grid item xs={6}>
          <div>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
              Créer une offre
            </Button>
            <NextDialog
              isOpen={isDialogOpen}
              id="offer-create-dialog"
              onClose={handleClose}
            >
              <NextOffersForm
                defaultValues={selectedValue}
                onSubmit={handleSubmit}
              />
            </NextDialog>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={0.5} alignItems="center" justifyContent="center">
        <Grid item xs={11}>
          <NextOffersList />
        </Grid>
      </Grid>
    </>
  );
};

export default NextOffers;
