import { Autocomplete, Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import FormInputProps from "../formInputProps";

const NexFormAutocomplete = ({
  id,
  options,
  label,
  control,
  name,
}: FormInputProps) => {
  return (
    <Grid item xs={12} md={12}>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <Autocomplete
            disablePortal
            id={id}
            options={options ? options : [""]}
            renderInput={(params) => <TextField {...params} label={label} />}
          />
        )}
      />
    </Grid>
  );
};

export default NexFormAutocomplete;
