import { Backdrop, Box, Button, Fade, Modal } from "@material-ui/core";
import { useState } from "react";
import { ModalPanelProps } from "../utils/typeScript";
import { useStyles } from "../styles/customStyles";
import AdvertisementForm from "./AdvertisementForm/AdvertisementForm";

export default function ModalPanel({
  onSubmit,
  editingAd,
  onCloseEditing,
}: ModalPanelProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (onCloseEditing) onCloseEditing();
  };

  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ position: "absolute", bottom: "20px", right: "20px" }}
        className={classes.button}
      >
        {editingAd ? "Edit Ad" : "Add Ads"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box className={classes.boxModal}>
            <AdvertisementForm
              onSubmit={onSubmit}
              onClose={handleClose}
              initialData={editingAd}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
