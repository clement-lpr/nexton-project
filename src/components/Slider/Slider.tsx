import { Box, Grid, Slider, Typography } from "@mui/material";
import { useState } from "react";

const valuetext = (value: number, index: number) => {
  return `${value.toString()}°C`;
};

interface Props {
  label: string;
}

const NextSlider = (props: Props) => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event: any, newValue: any): void => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 250 }}>
      <Grid container spacing={0.5} alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <Typography id="input-slider" gutterBottom>
            {props.label}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NextSlider;
