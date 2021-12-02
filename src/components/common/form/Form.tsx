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
    // props.addOffer(data);
    dispatch(addOffer(data));
  };

  //  const onAddTodo = useCallback(() => {
  //      dispatch(addOffer(newTodoRef.current.value));
  //      newTodoRef.current.value = "";
  //    }
  //  }, [dispatch]);

  return (
    // <Paper
    //   style={{
    //     display: "grid",
    //     gridRowGap: "20px",
    //     padding: "20px",
    //   }}
    // >
    <>
      <Grid container spacing={3}>
        <NextFormInputText
          name="company"
          control={control}
          label="Nom de l'entreprise"
        />
        <NextFormInputText name="job" control={control} label="Nom du poste" />
        <NextFormInputText
          name="jobType"
          control={control}
          label="Type de poste"
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
          label="Années d'expérience"
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
      </Grid>

      {/* <FormInputRadio
        name={"radioValue"}
        control={control}
        label={"Radio Input"}
      />
      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      />
      <FormInputDate name="dateValue" control={control} label="Date Input" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"checkboxValue"}
        label={"Checkbox Input"}
      />
      <FormInputSlider
        name={"sliderValue"}
        control={control}
        setValue={setValue}
        label={"Slider Input"}
      /> */}

      <Grid container spacing={0.5} alignItems="center" justifyContent="center">
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <Button
            style={{ marginLeft: "1em" }}
            onClick={handleSubmit(onSubmit)}
            variant={"contained"}
          >
            {" "}
            Créer{" "}
          </Button>
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
    // </Paper>
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
