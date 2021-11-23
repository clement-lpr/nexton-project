import NextSearch from "@components/Search";
import NextSlider from "@components/Slider";
import { Container, Grid } from "@mui/material";

const Offers = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={5}>
            <NextSearch
              options={[]}
              label="Rechercher une compagnie"
            ></NextSearch>
          </Grid>
          <Grid item xs={5}>
            <NextSearch
              options={[]}
              label="Rechercher une compétence"
            ></NextSearch>
          </Grid>
          <Grid item xs={3}>
            <NextSlider label="Date de l'offre"></NextSlider>
          </Grid>
          <Grid item xs={7}></Grid>
        </Grid>
      </Container>
      <Container maxWidth="md"></Container>
    </>
  );
};

export default Offers;
