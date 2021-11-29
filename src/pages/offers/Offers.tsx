import NextForm from "@components/offers/form";
import NextSearch from "@components/offers/search";
import NextSlider from "@components/offers/slider";
import { Container, Grid } from "@mui/material";

const NextOffers = () => {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();

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
              label={"Slider Input"}
            ></NextSlider>
          </Grid>
          <Grid item xs={7}></Grid>
        </Grid>
      </Container>
      <Container maxWidth="md"></Container>

      <Grid container spacing={0.5} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          {" "}
          <NextForm />
        </Grid>
      </Grid>
    </>
  );
};

export default NextOffers;
