import React from "react";
import { TextField } from "@material-ui/core";
import { DateFieldsProps } from "../../../utils/typeScript";
import { useStyles } from "../../../styles/customStyles";

const DateFields: React.FC<DateFieldsProps> = ({
  startDate,
  endDate,
  today,
  setStartDate,
  setEndDate,
}) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: today,
        }}
        className={classes.customTextField}
        style={{ width: "200px" }}
        required
      />
      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: startDate || today,
        }}
        className={classes.customTextField}
        style={{ width: "200px" }}
        required
      />
    </>
  );
};

export default DateFields;
