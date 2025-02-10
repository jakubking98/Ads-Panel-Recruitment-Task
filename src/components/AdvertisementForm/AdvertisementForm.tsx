import { useEffect, useState } from "react";
import {
  TextField,
  FormLabel,
  useTheme,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import { AdvertisementFormProps } from "../../utils/typeScript";
import { useStyles } from "../../styles/customStyles";
import { handleSubmit } from "../../utils/storage";
import CloseButton from "./components/CloseButton";
import PhotoNumberSelector from "./components/PhotoNumberSelector";
import DateFields from "./components/DateFields";
import FormButtons from "./components/FormButtons";

const AdvertisementForm = ({
  onSubmit,
  onClose,
  onCancel,
  initialData,
}: AdvertisementFormProps) => {
  const [name, setName] = useState(initialData?.name || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [startDate, setStartDate] = useState(initialData?.startDate || "");
  const [endDate, setEndDate] = useState(initialData?.endDate || "");
  const [photoNumber, setPhotoNumber] = useState(initialData?.photoNumber || 1);
  const [nameError, setNameError] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.down("lg"));

  const classes = useStyles();

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setContent(initialData.content);
      setStartDate(initialData.startDate);
      setEndDate(initialData.endDate);
      setPhotoNumber(initialData.photoNumber);
    }

    setNameError("");
  }, [initialData]);

  const handleReset = () => {
    setName("");
    setContent("");
    setStartDate("");
    setEndDate("");
    setPhotoNumber(1);
  };

  const handlePhotoNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoNumber(Number(e.target.value));
  };

  const today = new Date().toISOString().split("T")[0];

  const isFormFilled =
    name || content || startDate || endDate || photoNumber !== 1;

  const labelText = initialData ? "Panel to edit ads" : "Panel to add ads";
  const labelColor = initialData ? "red" : "#4CAF50";
  const actionText = initialData ? "Edit" : "Add";
  const actionFullText = initialData
    ? "Edit Advertisement"
    : "Add Advertisement";

  const clearText = isMediumDevice ? "Clear" : "Clear Form";
  const cancelText = isMediumDevice ? "Cancel" : "Cancel Edit";

  return (
    <>
      <form
        onSubmit={(e) =>
          handleSubmit({
            e,
            name,
            content,
            startDate,
            endDate,
            photoNumber,
            initialData,
            onSubmit,
            onClose,
            setNameError,
          })
        }
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: isMobile ? "5px" : "20px",
          padding: isMobile ? "0" : "0 50px",
        }}
      >
        <CloseButton isMobile={isMobile} onClose={onClose} />
        <FormLabel
          component="legend"
          style={{ color: labelColor, fontSize: "24px", fontWeight: "bold" }}
        >
          {labelText}
        </FormLabel>

        <PhotoNumberSelector
          photoNumber={photoNumber}
          onChange={handlePhotoNumberChange}
        />

        <TextField
          label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
          className={classes.customTextField}
          required
          error={Boolean(nameError)}
          helperText={nameError}
        />

        <TextField
          label="Text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          rows={4}
          inputProps={{ maxLength: 500 }}
          className={classes.customTextField}
          style={{ scrollbarWidth: "thin", scrollbarColor: "#4CAF50 #f1f1f1" }}
          required
        />
        <Box style={{ textAlign: "right", fontSize: "14px", color: "#4CAF50" }}>
          {content.length} / 500
        </Box>

        <DateFields
          startDate={startDate}
          endDate={endDate}
          today={today}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        <FormButtons
          isMediumDevice={isMediumDevice}
          actionText={actionText}
          actionFullText={actionFullText}
          isFormFilled={isFormFilled}
          clearText={clearText}
          cancelText={cancelText}
          handleReset={handleReset}
          initialData={initialData}
          onCancel={onCancel}
        />
      </form>
    </>
  );
};

export default AdvertisementForm;
