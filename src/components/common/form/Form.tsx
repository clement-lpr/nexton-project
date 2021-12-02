import Offer from "@models/offers.model";
import { Button, Grid } from "@mui/material";
import { addOffer } from "@redux/reducers/offerReducer/offerReducer";
import { RootState, selectOffers } from "@redux/store";
import { useForm } from "react-hook-form";
import { connect, useDispatch, useSelector } from "react-redux";
import NextFormInputText from "./textInput";

const defaultValues = {
  abilities: "",
  abilityType: "",
  businessEngineer: "",
  company: "",
  creationDate: "",
  description: "",
  experience: "",
  name: "",
};

export const NextForm = (props: any) => {
  const methods = useForm<Offer>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control } = methods;
  const offers = useSelector(selectOffers);
  const dispatch = useDispatch();

  const onSubmit = (data: Offer) => {
    dispatch(addOffer(data));
  };

  return (
    <>
      <Grid container spacing={3} style={{ padding: "20px" }}>
        <NextFormInputText
          name="company"
          control={control}
          label="Nom de l'entreprise"
        />
        <NextFormInputText
          name="jobName"
          control={control}
          label="Nom du poste"
        />
        <NextFormInputText
          name="jobType"
          control={control}
          label="Type de contrat"
        />
        <NextFormInputText
          name="businessEngineer"
          control={control}
          label="Ingénieur d'affaire"
        />{" "}
        <NextFormInputText
          name="creationDate"
          control={control}
          label="Date de création"
        />
        <NextFormInputText
          name="experience"
          control={control}
          label="Ancienneté"
        />{" "}
        <NextFormInputText
          name="description"
          control={control}
          label="Description"
        />{" "}
        <NextFormInputText
          name="abilities"
          control={control}
          label="Compétences"
        />{" "}
        <NextFormInputText
          name="location"
          control={control}
          label="Localisation"
        />{" "}
        <NextFormInputText
          name="businessUnit"
          control={control}
          label="Business unit"
        />{" "}
        <NextFormInputText name="priority" control={control} label="Urgence" />{" "}
      </Grid>
      <Grid
        container
        spacing={0.5}
        alignItems="center"
        justifyContent="center"
        style={{ padding: "20px" }}
      >
        <Grid item xs={6}></Grid>
        <Grid item xs={2}>
          <Button
            style={{ marginLeft: "1em" }}
            onClick={handleSubmit(onSubmit)}
            variant={"contained"}
          >
            {" "}
            Créer{" "}
          </Button>
        </Grid>

        <Grid item xs={2}>
          <Button
            style={{ marginLeft: "1em" }}
            onClick={() => reset()}
            variant={"outlined"}
          >
            {" "}
            Annuler{" "}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({ offers: state.offers.offer });
const mapDispatchToProps = {
  addOffer,
};

const ConnectedNextForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NextForm);

export default ConnectedNextForm;
