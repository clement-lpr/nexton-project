import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

const routes = ["/offers", "/profiles"];

const NextHeader = () => {
  const [value, setValue] = useState("/offers");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", paddingBottom: "2%" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Offres"
            value={routes[0]}
            component={Link}
            to={routes[0]}
          />
          <Tab
            label="Profils"
            value={routes[1]}
            component={Link}
            to={routes[1]}
          />
        </Tabs>
      </Box>
    </>
  );
};

export default NextHeader;
