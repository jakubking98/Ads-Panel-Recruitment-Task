import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  //Other styling
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    width: "100%",
    right: "0",
  },

  toolbarMenu: {
    justifyContent: "space-between",
    padding: "0",
    margin: "0 5%",
  },

  listMenu: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    padding: "20px",
    gap: "10px",
  },

  listItemMenu: {
    backgroundColor: "#4CAF50",
    borderRadius: "10px",
  },

  paperList: {
    padding: "20px 20px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#4CAF50",
    opacity: "0.9",
    color: "#fff",
    position: "absolute",
    borderRadius: "15px",
    top: "200px",
    height: "225px",
    wordWrap: "break-word",
    gap: "5px",
    justifyContent: "center",
  },

  listGridItemStyle: {
    margin: "64px 0 0 0",
    padding: "0 5%",
    height: "90vh",
    backgroundColor: "#f5f5f5",
    overflowY: "auto",
    scrollbarWidth: "none",
    boxSizing: "border-box",
  },

  formContainerStyle: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },

  //Image elements style

  awatarLogo: {
    width: "auto",
    height: "auto",
    borderRadius: "0",
  },

  imageStyleHome: {
    width: "100%",
    height: "auto",
    marginRight: "50px",
  },

  imageList: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    boxShadow: "1px 1px 20px -7px rgba(66, 68, 90, 1)",
    borderRadius: "15px",
  },

  //Box styling
  boxContainer: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    bgcolor: "#f5f7fa",
    position: "relative",
    overflow: "hidden",
  },

  boxGrid: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },

  boxGridNewAd: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },

  boxList: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    height: "auto",
    paddingBottom: "80px",
  },

  boxModal: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    padding: "40px",
    outline: "none",
    backgroundColor: "#fff",
  },

  //Button styling
  button: {
    color: "#fff",
    backgroundColor: "#4CAF4F",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "16px",
    textDecoration: "none",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#388E3B",
    },
  },

  buttonBorder: {
    color: "#4CAF4F",
    backgroundColor: "#transparent",
    border: "1px solid #4CAF4F",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "16px",
    textDecoration: "none",
    textTransform: "none",

    "&:hover": {
      backgroundColor: "#4CAF4F",
      color: "#fff",
    },
  },
  buttonWhite: {
    color: "#4CAF4F",
    backgroundColor: "#fff",
    border: "1px solid #fff",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "16px",
    textDecoration: "none",
    textTransform: "none",

    "&:hover": {
      backgroundColor: "#4CAF4F",
      color: "#fff",
    },
  },

  //IconButton styling
  closeIconList: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#4CAF50",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  editIconList: {
    position: "absolute",
    top: 10,
    right: 50,
    color: "#4CAF50",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  circularProgressStyle: {
    color: "#000",
    width: "5rem",
    height: "5rem",
    marginBottom: "3rem",
  },

  //Grid styling
  gridLogin: {
    padding: "0 50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    boxSizing: "border-box",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },

  gridHome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },

  //Typography styling
  typographyHome: {
    fontStyle: "italic",
    color: "#000",
    maxWidth: "80%",
    fontSize: "1.5rem",
    lineHeight: 1.5,
    marginBottom: "3rem",
    textAlign: "center",
  },

  typographyLogin: {
    color: "#4CAF4F",
    fontWeight: "bold",
    marginBottom: "1rem",
  },

  typographyName: {
    marginBottom: 1,
    textWrap: "wrap",
  },

  typographyText: {
    fontSize: "14px",
    marginBottom: 2,
    overflowY: "auto",
    scrollbarWidth: "none",
  },

  //Form Element styling
  customRadio: {
    "&.Mui-checked": {
      color: "#4CAF50",
    },
  },

  customTextField: {
    "& label": {
      color: "#4CAF50",
    },
    "& label.Mui-focused": {
      color: "#388E3C",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#4CAF50",
      },
      "&:hover fieldset": {
        borderColor: "#388E3C",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1B5E20",
      },
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#4CAF50",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#388E3C",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1B5E20",
    },
    "& .MuiInputBase-root": {
      "& .MuiOutlinedInput-root": {
        overflowY: "auto",
      },
    },
    "& .MuiInputBase-input": {
      scrollbarWidth: "thin",
      scrollbarColor: "#4CAF50 #f1f1f1",
    },
    "& .MuiInputBase-root::-webkit-scrollbar": {
      width: "8px",
    },
    "& .MuiInputBase-root::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "& .MuiInputBase-root::-webkit-scrollbar-thumb": {
      background: "#4CAF50",
      borderRadius: "10px",
    },
    "& .MuiInputBase-root::-webkit-scrollbar-thumb:hover": {
      background: "#388E3C",
    },
  },
});
