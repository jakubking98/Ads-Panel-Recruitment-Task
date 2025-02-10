import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Illustration from "../assets/Illustration.png";
import { Link } from "react-router-dom";
import MenuTop from "../components/MenuTop";
import QuoteDisplay from "../components/HomePage/QuoteDisplay";
import { useStyles } from "../styles/customStyles";

export default function HomePage() {
  const [quote, setQuote] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useTheme();
  const smallDivice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  useEffect(() => {
    QuoteDisplay(setQuote, setLoading);
  }, []);

  return (
    <Box className={classes.boxContainer}>
      <MenuTop />

      <Grid container style={{ flexGrow: 1 }}>
        <Grid
          item
          xs={12}
          md={8}
          className={classes.gridHome}
          style={{ padding: isMobile ? "0 20px " : "0 50px " }}
        >
          <Typography
            variant="h1"
            component="h1"
            style={{
              color: "#4CAF4F",
              fontSize: isMobile ? "50px" : "96px",
            }}
            gutterBottom
          >
            Welcome
          </Typography>
          {loading ? (
            <CircularProgress className={classes.circularProgressStyle} />
          ) : (
            <Typography
              variant="h6"
              className={classes.typographyHome}
              style={{
                fontSize: isMobile ? "18px" : "24px",
              }}
            >
              "{quote}"
            </Typography>
          )}
          <Button
            variant="contained"
            component={Link}
            to="/login"
            className={classes.button}
          >
            Go To Panel
          </Button>
        </Grid>
        {!smallDivice && (
          <Grid item xs={12} md={4}>
            <Box className={classes.boxGrid} style={{ justifyContent: "none" }}>
              <img
                src={Illustration}
                alt="Illustration Image"
                className={classes.imageStyleHome}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
