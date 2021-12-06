import { Dialog, DialogTitle, Grid } from "@mui/material";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  onClose: () => void;
  id: string;
  isOpen: boolean;
}

const NextDialog = (props: Props) => {
  const { children, id, isOpen, onClose } = props;

  return (
    <div id={id}>
      <Dialog onClose={onClose} open={isOpen}>
        <DialogTitle>Création d'une offre: {id}</DialogTitle>
        <Grid
          container
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default NextDialog;
