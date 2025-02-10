import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";

import MenuTop from "../components/MenuTop";
import { saveAdvertisement } from "../utils/storage";
import AddImg from "../assets/Add.png";
import { useNavigate } from "react-router-dom";
import { Advertisement } from "../utils/typeScript";
import { useStyles } from "../styles/customStyles";
import AdvertisementForm from "../components/AdvertisementForm/AdvertisementForm";

export default function NewAdvertisementPage() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();

  const handleAddAdvertisement = (ad: Advertisement) => {
    saveAdvertisement(ad);
    navigate("/advertisements");
  };

  return (
    <Box className={classes.boxContainer}>
      <MenuTop />

      <Grid container style={{ overflow: "hidden" }}>
        {!isMobile && (
          <Grid item md={6}>
            <Box className={classes.boxGrid}>
              <img
                src={AddImg}
                alt="Example"
                style={{ width: "80%", height: "auto" }}
              />
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Box
            className={classes.boxGridNewAd}
            style={{
              padding: isMobile ? "20px 10%" : "20px",
            }}
          >
            <AdvertisementForm onSubmit={handleAddAdvertisement} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
