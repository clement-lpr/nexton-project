import { Button, Grid, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import NextFormInputText from "./textInput";

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};

export const NextForm = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
      }}
    >
      <Typography variant="h6"> Création d'une offre</Typography>
      <Grid container spacing={3}>
        <NextFormInputText
          name="textValue1"
          control={control}
          label="Nom de l'entreprise"
        />
        <NextFormInputText
          name="textValue2"
          control={control}
          label="Ingénieur d'affaire"
        />{" "}
        <NextFormInputText
          name="textValue3"
          control={control}
          label="Date de création"
        />
        <NextFormInputText
          name="textValue3"
          control={control}
          label="Années d'expérience"
        />{" "}
        <NextFormInputText
          name="textValue3"
          control={control}
          label="Description"
        />{" "}
        <NextFormInputText
          name="textValue3"
          control={control}
          label="Compétences"
        />{" "}
        <NextFormInputText
          name="textValue3"
          control={control}
          label="Société"
        />
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
    </Paper>
  );
};
export default NextForm;
