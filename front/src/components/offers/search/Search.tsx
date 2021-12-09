import NexFormAutocomplete from "@components/common/form/autocomplete";
import NextFormRadio from "@components/common/form/radio/Radio";
import Option from "@models/option.model";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue?: number;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};

const defaultOption: Option[] = [
  {
    label: "Empty value 1",
    value: "1",
  },
  {
    label: "Empty value 2",
    value: "2",
  },
];

const NextOffersSarch = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { control } = methods;

  return (
    <Grid container spacing={3}>
      <Grid item xs={1}>
        {" "}
      </Grid>
      <Grid item xs={10}>
        <NexFormAutocomplete
          name="company-searchBar"
          id="company-searchBar"
          options={defaultOption}
          control={control}
          label="Rechercher une offre"
        ></NexFormAutocomplete>
      </Grid>
      <Grid item xs={1}>
        {" "}
      </Grid>
      <Grid item xs={1}>
        {" "}
      </Grid>
      <Grid item xs={4}>
        <NextFormRadio
          name="experience-radio"
          id="experience-radio"
          control={control}
          label="Expérience"
        ></NextFormRadio>
      </Grid>
    </Grid>
  );
};

export default NextOffersSarch;
