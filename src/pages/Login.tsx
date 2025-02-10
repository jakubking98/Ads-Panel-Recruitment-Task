import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuTop from "../components/MenuTop";
import LoginImg from "../assets/Login.png";
import { useStyles } from "../styles/customStyles";

export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.length < 8) {
      setError("The password must be at least 8 characters long.");
    } else if (password === "recruitment") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/advertisements");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <Box className={classes.boxContainer}>
      <MenuTop />

      <Grid container style={{ flexGrow: 1 }}>
        {!isMobile && (
          <Grid item md={8}>
            <Box className={classes.boxGrid}>
              <img
                src={LoginImg}
                alt="Example"
                style={{
                  width: "80%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={4} className={classes.gridLogin}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.typographyLogin}
            gutterBottom
          >
            Login to panel
          </Typography>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            style={{
              marginBottom: "1rem",
              borderColor: error ? "red" : "#4CAF4F",
            }}
            className={classes.customTextField}
            error={!!error}
            helperText={error}
          />
          <Button
            variant="contained"
            onClick={handleLogin}
            className={classes.button}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
