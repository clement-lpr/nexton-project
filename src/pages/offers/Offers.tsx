import NextDialog from "@components/common/dialog";
import { NextForm } from "@components/common/form/Form";
import NextSlider from "@components/common/form/slider";
import NextOffersList from "@components/offers/list";
import NextOfferSarch from "@components/offers/search";
import { Button, Container, Grid } from "@mui/material";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import React from "react";

const NextOffers = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={6}>
            <NextOfferSarch
              options={[]}
              label="Rechercher une compagnie"
            ></NextOfferSarch>
          </Grid>
          <Grid item xs={6}>
            <NextOfferSarch
              options={[]}
              label="Rechercher une compétence"
            ></NextOfferSarch>
          </Grid>
          <Grid item xs={3}>
            <NextSlider
              name={"Date de l'offre"}
              // control={control}
              // setValue={setValue}
              label={"Expérience"}
            ></NextSlider>
          </Grid>
          <Grid item xs={7}></Grid>
        </Grid>
      </Container>
      <Grid container spacing={0.5} alignItems="center" justifyContent="center">
        <Grid item xs={5}>
          {" "}
        </Grid>
        <Grid item xs={6}>
          <div>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
              Créer une offre
            </Button>
            <NextDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
              content={<NextForm />}
            />
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
