import { Autocomplete, CircularProgress, Grid, TextField } from "@mui/material";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import FormInputProps from "../formInputProps";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

interface DogResponse {
  message: string[];
  status: string;
}

const defaultBreed: Breed = {
  id: "",
  name: "default",
  image: {
    url: "",
  },
};

const NexFormAutocomplete = ({
  id,
  options,
  label,
  control,
  name,
}: FormInputProps) => {
  const [open, setOpen] = useState(false);
  const [optionsj, setOptionsj] = useState([{}] as any[]);
  const [inputValue, setInputValue] = useState("");

  const loading = open && optionsj.length === 0;

  const getOptionsDelayed = useCallback(
    debounce((text, callback) => {
      setOptionsj([]);
      fetch("https://dog.ceo/api/breed/" + text + "/images").then(
        callback.message
      );
    }, 200),
    []
  );

  const onChangeHandle = async (value: string) => {
    // this default api does not support searching but if you use google maps or some other use the value and post to get back you reslut and then set it using setOptions
    console.log(value);

    const response = await fetch(
      "https://dog.ceo/api/breed/" + value + "/images"
    );
    if (!response) return;
    console.log("response", response);
    const dogs: DogResponse = await response.json();
    console.log("dogs", dogs);
    if (response.status !== 404) {
      setOptionsj(dogs.message);
    }
  };

  // useEffect(() => {
  //   if (!open) {
  //     setOptionsj([]);
  //   }
  // }, [open]);

  useEffect(() => {
    getOptionsDelayed(inputValue, (filteredOptions: any) => {
      setOptionsj([filteredOptions]);
    });
  }, [inputValue, getOptionsDelayed]);

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
            filterSelectedOptions
            id={id}
            multiple
            onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            options={optionsj ? optionsj : [defaultBreed]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                onChange={(ev) => {
                  // dont fire API if the user delete or not entered anything
                  if (ev.target.value !== "" || ev.target.value !== null) {
                    onChangeHandle(ev.target.value);
                  }
                }}
                label={label}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        )}
      />
    </Grid>
  );
};

export default NexFormAutocomplete;
