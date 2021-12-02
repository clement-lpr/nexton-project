import { Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import FormInputProps from "../formInputProps";

const NextFormInputText = ({ name, control, label }: FormInputProps) => (
  <Grid item xs={12} md={6}>
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  </Grid>
);
export default NextFormInputText;
