import NextForm from "@components/common/form";
import NextSlider from "@components/common/form/slider";
import NextDialog from "@components/offers/dialog";
import NextSearch from "@components/offers/search";
import { Button, Container, Grid } from "@mui/material";
import React from "react";

const emails = ["username@gmail.com", "user02@gmail.com"];

const NextOffers = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
            <NextSearch
              options={[]}
              label="Rechercher une compagnie"
            ></NextSearch>
          </Grid>
          <Grid item xs={6}>
            <NextSearch
              options={[]}
              label="Rechercher une compétence"
            ></NextSearch>
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
      <Container maxWidth="md"></Container>

      <Grid container spacing={0.5} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          {" "}
          <div>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
              Open simple dialog
            </Button>
            <NextDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </div>
          <NextForm />
        </Grid>
      </Grid>
    </>
  );
};

export default NextOffers;
