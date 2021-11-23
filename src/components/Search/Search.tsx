import { Autocomplete, TextField } from "@mui/material";

interface Props {
  options: string[];
  label: string;
}

const NextSearch = (props: Props) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.options}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};

export default NextSearch;
