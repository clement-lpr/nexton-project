import NextForm from "@components/common/form";
import { Dialog, DialogTitle, Grid } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface Props {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const NextSearch = (props: Props) => {
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
          <NextForm />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default NextSearch;
