import {
  Box,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Img1 from "../assets/AdImg1.jpg";
import Img2 from "../assets/AdImg2.jpg";
import Img3 from "../assets/AdImg3.jpg";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import { AdvertisementListProps } from "../utils/typeScript";
import { useStyles } from "../styles/customStyles";

const AdvertisementList = ({
  advertisements,
  onDelete,
  onEdit,
}: AdvertisementListProps) => {
  const imageMap: { [key: number]: string } = {
    1: Img1,
    2: Img2,
    3: Img3,
  };

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={3} style={{ paddingTop: "20px" }}>
      {advertisements.map((ad) => (
        <Grid item xs={12} lg={6} key={ad.id}>
          <Box className={classes.boxList}>
            <img
              src={imageMap[ad.photoNumber] || Img1}
              alt={`Advertisement ${ad.photoNumber}`}
              className={classes.imageList}
            />
            <Tooltip title="Delete Ad" arrow>
              <IconButton
                onClick={() => onDelete(ad.id)}
                className={classes.closeIconList}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit Ad" arrow>
              <IconButton
                onClick={() => onEdit(ad)}
                className={classes.editIconList}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Paper
              elevation={3}
              className={classes.paperList}
              style={{ color: "#fff" }}
            >
              <Typography
                variant="h4"
                className={classes.typographyName}
                style={{
                  fontSize: isMobile ? "20px" : "30px",
                }}
              >
                {ad.name}
              </Typography>
              <Typography variant="body1" className={classes.typographyText}>
                {ad.content}
              </Typography>

              <Typography variant="body1">
                <strong>Start date:</strong> {ad.startDate}
              </Typography>
              <Typography variant="body1">
                <strong>End date:</strong> {ad.endDate}
              </Typography>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default AdvertisementList;
