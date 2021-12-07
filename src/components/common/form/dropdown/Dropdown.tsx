import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import FormInputProps from "../formInputProps";

const options = [
  {
    label: "Junior",
    value: "1",
  },
  {
    label: "Confirmé",
    value: "1",
  },
  {
    label: "Sénior",
    value: "3",
  },
];

const NextFormInputDropdown = ({ label, control, name }: FormInputProps) => {
  const generateSelectOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <Grid item xs={12} md={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <>
            <FormControl fullWidth>
              <InputLabel>{label}</InputLabel>
              <Select
                onChange={onChange}
                value={value}
                label={label}
                size="small"
              >
                {generateSelectOptions()}
              </Select>
            </FormControl>
          </>
        )}
      />
    </Grid>
  );
};

export default NextFormInputDropdown;
