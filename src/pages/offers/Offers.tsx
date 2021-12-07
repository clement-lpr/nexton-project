import NextDialog from "@components/common/dialog";
import { NextOffersForm } from "@components/offers/form/Form";
import NextOffersList from "@components/offers/list";
import NextOfferSarch from "@components/offers/search";
import Offer from "@models/offers.model";
import { Button, Grid } from "@mui/material";
import { useNextDispatch } from "@redux/hook";
import { useGetOfferByIdQuery } from "@services/offer";
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
  jobType: "Temps plein",
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

  const { data, error, isLoading } = useGetOfferByIdQuery("charizard");

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
        <Grid item xs={1}></Grid>

        <Grid item xs={10}>
          <NextOffersList />
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={12}>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <div style={{ textAlign: "center" }}>
              <h3>{data.species.name}</h3>
              <img src={data.sprites.front_shiny} alt={data.species.name} />
            </div>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default NextOffers;
