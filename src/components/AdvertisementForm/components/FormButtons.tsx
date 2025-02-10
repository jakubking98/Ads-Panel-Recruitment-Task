import React from "react";
import { Button, Box } from "@material-ui/core";
import { useStyles } from "../../../styles/customStyles";
import { FormButtonsProps } from "../../../utils/typeScript";

const FormButtons: React.FC<FormButtonsProps> = ({
  isMediumDevice,
  actionText,
  actionFullText,
  isFormFilled,
  clearText,
  cancelText,
  handleReset,
  initialData,
  onCancel,
}) => {
  const classes = useStyles();

  return (
    <Box style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
      <Button type="submit" variant="contained" className={classes.button}>
        {isMediumDevice ? actionText : actionFullText}
      </Button>

      {isFormFilled && (
        <Button type="button" className={classes.button} onClick={handleReset}>
          {clearText}
        </Button>
      )}

      {initialData && (
        <Button
          type="button"
          className={classes.button}
          onClick={() => {
            handleReset();
            if (onCancel) onCancel();
          }}
        >
          {cancelText}
        </Button>
      )}
    </Box>
  );
};

export default FormButtons;
