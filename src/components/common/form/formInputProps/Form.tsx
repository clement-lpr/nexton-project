import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import FormInputProps from "../formInputProps";

const NextFormInputText = ({ name, control, label }: FormInputProps) => (
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
);
export default NextFormInputText;
