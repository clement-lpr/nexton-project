import { Dialog, DialogTitle, Grid } from "@mui/material";
import { ReactElement } from "react";

export interface Props {
  content: ReactElement;
  onClose: (value: string) => void;
  open: boolean;
  selectedValue: string;
}

const NextDialog = (props: Props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Création d'une offre</DialogTitle>
      <Grid container spacing={0.5} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          {props.content}
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default NextDialog;
