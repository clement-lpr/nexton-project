import NexFormAutocomplete from "@components/common/form/autocomplete";
import NextFormRadio from "@components/common/form/radio/Radio";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";

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

const NextOffersSarch = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { control } = methods;

  return (
    <Grid container spacing={0.5} alignItems="center" justifyContent="center">
      <Grid item xs={6}>
        <NexFormAutocomplete
          name="company-searchBar"
          id="company-searchBar"
          options={[""]}
          control={control}
          label="Rechercher une compagnie"
        ></NexFormAutocomplete>
      </Grid>
      <Grid item xs={6}>
        <NexFormAutocomplete
          name="ability-searchBar"
          id="ability-searchBar"
          options={[""]}
          label="Rechercher une compétence"
          control={control}
        ></NexFormAutocomplete>
      </Grid>
      <Grid item xs={4}>
        <NextFormRadio
          name="experience-radio"
          id="experience-radio"
          control={control}
          label="Expérience"
        ></NextFormRadio>
      </Grid>
      <Grid item xs={7}></Grid>
    </Grid>
  );
};

export default NextOffersSarch;
