import Option from "@models/option.model";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import FormInputProps from "../formInputProps";

const options: Option[] = [
  {
    label: "Radio Option 1",
    value: "1",
  },
  {
    label: "Radio Option 2",
    value: "2",
  },
];

const NextFormCheckbox: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value || ""} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default NextFormCheckbox;
