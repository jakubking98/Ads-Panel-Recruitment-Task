import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";

import MenuTop from "../components/MenuTop";
import AdvertisementList from "../components/AdvertisementList";
import {
  deleteAdvertisement,
  getAdvertisements,
  saveAdvertisement,
} from "../utils/storage";
import { useCallback, useState } from "react";
import ModalPanel from "../components/ModalPanel";
import { Advertisement } from "../utils/typeScript";
import { useStyles } from "../styles/customStyles";
import AdvertisementForm from "../components/AdvertisementForm/AdvertisementForm";

export default function AdvertisementPage() {
  const classes = useStyles();
  const [ads, setAds] = useState(getAdvertisements());
  const [editingAd, setEditingAd] = useState<Advertisement | undefined>(
    undefined
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const refreshAds = useCallback(() => {
    setAds(getAdvertisements());
  }, []);

  const handleAddAdvertisement = useCallback(
    (ad: Advertisement) => {
      saveAdvertisement(ad);
      refreshAds();
      setEditingAd(undefined);
    },
    [refreshAds]
  );

  const handleDeleteAdvertisement = useCallback(
    (id: string) => {
      deleteAdvertisement(id);
      refreshAds();
    },
    [refreshAds]
  );

  const handleEditAdvertisement = useCallback((ad: Advertisement) => {
    setEditingAd(ad);
  }, []);

  const handleCloseEditing = useCallback(() => {
    setEditingAd(undefined);
  }, []);

  return (
    <Box className={classes.boxContainer}>
      <MenuTop />

      <Grid container style={{ overflow: "hidden" }}>
        <Grid item xs={12} md={8} className={classes.listGridItemStyle}>
          <AdvertisementList
            advertisements={ads}
            onDelete={handleDeleteAdvertisement}
            onEdit={handleEditAdvertisement}
          />
          {isMobile && (
            <ModalPanel
              onSubmit={handleAddAdvertisement}
              editingAd={editingAd}
              onCloseEditing={handleCloseEditing}
            />
          )}
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={4}>
            <Box className={classes.formContainerStyle}>
              <AdvertisementForm
                onSubmit={handleAddAdvertisement}
                initialData={editingAd ?? undefined}
                onCancel={handleCloseEditing}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
