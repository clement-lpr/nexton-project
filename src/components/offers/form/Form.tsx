import NextFormInputText from "@common/form/textInput";
import NextFormInputDropdown from "@components/common/form/dropdown";
import Offer from "@models/offers.model";
import { Button, Grid } from "@mui/material";
import { addOffer } from "@pages/offers/offers.slice";
import { RootState } from "@redux/store";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

export interface Props {
  onSubmit: (data: Offer) => void;
  defaultValues: Offer;
}

export const NextOffersForm = (props: Props) => {
  const methods = useForm<Offer>({ defaultValues: props.defaultValues });
  const { handleSubmit, reset, control } = methods;
  return (
    <>
      <Grid container spacing={3} style={{ padding: "20px" }}>
        <NextFormInputText
          name="company"
          id="company"
          control={control}
          label="Nom de l'entreprise"
        />
        <NextFormInputText
          name="jobName"
          id="jobName"
          control={control}
          label="Nom du poste"
        />
        <NextFormInputText
          name="jobType"
          id="jobType"
          control={control}
          label="Type de contrat"
        />
        <NextFormInputText
          name="businessEngineer"
          id="businessEngineer"
          control={control}
          label="Ingénieur d'affaire"
        />{" "}
        <NextFormInputText
          name="creationDate"
          id="creationDate"
          control={control}
          label="Date de création"
        />
        <NextFormInputDropdown
          name="experience"
          id="experience"
          control={control}
          label="Ancienneté"
        />
        <NextFormInputText
          name="description"
          id="description"
          control={control}
          label="Description"
        />{" "}
        <NextFormInputText
          name="abilities"
          id="abilities"
          control={control}
          label="Compétences"
        />{" "}
        <NextFormInputText
          name="location"
          id="location"
          control={control}
          label="Localisation"
        />{" "}
        <NextFormInputText
          name="businessUnit"
          id="businessUnit"
          control={control}
          label="Business unit"
        />{" "}
        <NextFormInputText
          name="priority"
          id="priority"
          control={control}
          label="Urgence"
        />{" "}
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
            onClick={handleSubmit(props.onSubmit)}
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
)(NextOffersForm);

export default ConnectedNextForm;
