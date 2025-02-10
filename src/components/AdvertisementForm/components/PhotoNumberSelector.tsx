import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { PhotoNumberSelectorProps } from "../../../utils/typeScript";
import { useStyles } from "../../../styles/customStyles";

const PhotoNumberSelector: React.FC<PhotoNumberSelectorProps> = ({
  photoNumber,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <FormControl component="fieldset">
      <FormLabel
        component="legend"
        style={{ color: "#4CAF50", fontSize: "18px", marginBottom: "10px" }}
      >
        Select Photo Number
      </FormLabel>
      <RadioGroup
        aria-label="Select Photo Number"
        name="photoNumber"
        value={photoNumber}
        onChange={onChange}
      >
        <FormControlLabel
          value={1}
          control={<Radio className={classes.customRadio} />}
          label="Foto Number 1"
        />
        <FormControlLabel
          value={2}
          control={<Radio className={classes.customRadio} />}
          label="Foto Number 2"
        />
        <FormControlLabel
          value={3}
          control={<Radio className={classes.customRadio} />}
          label="Foto Number 3"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default PhotoNumberSelector;
