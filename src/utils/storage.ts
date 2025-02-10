import { NavigateFunction } from "react-router-dom";
import { Advertisement, HandleSubmitParams } from "./typeScript";
import { useCallback } from "react";

const STORAGE_KEY = "advertisements";

export const getAdvertisements = (): Advertisement[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveAdvertisement = (ad: Advertisement) => {
  const ads = getAdvertisements();
  const existingIndex = ads.findIndex((a) => a.id === ad.id);
  if (existingIndex >= 0) {
    ads[existingIndex] = ad;
  } else {
    ads.push(ad);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ads));
};

export const deleteAdvertisement = (id: string) => {
  const ads = getAdvertisements().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ads));
};
export const useMenuLogic = (
  currentPath: string,
  isAuthenticated: boolean,
  navigate: NavigateFunction
) => {
  const navigateTo = useCallback((path: string) => navigate(path), [navigate]);

  const logout = useCallback(() => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
    navigate("/");
  }, [navigate]);

  const routesConfig: Record<
    string,
    {
      buttonText: string;
      buttonAction: () => void;
      buttonText2?: string;
      buttonAction2?: () => void;
    }
  > = {
    "/login": {
      buttonText: "Return to Home",
      buttonAction: () => navigateTo("/"),
    },
    "/advertisements": {
      buttonText: "Logout",
      buttonAction: logout,
      buttonText2: "Add ads",
      buttonAction2: () => navigateTo("/advertisements/new"),
    },
    "/advertisements/new": {
      buttonText: "Logout",
      buttonAction: logout,
      buttonText2: "Back",
      buttonAction2: () => navigateTo("/advertisements"),
    },
  };

  return (
    routesConfig[currentPath] || {
      buttonText: isAuthenticated ? "Logout" : "Login",
      buttonAction: isAuthenticated ? logout : () => navigateTo("/login"),
    }
  );
};

export const handleSubmit = ({
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
}: HandleSubmitParams) => {
  e.preventDefault();

  const ads = getAdvertisements();
  const nameLower = name.trim().toLowerCase();

  if (!initialData) {
    const exists = ads.some((ad) => ad.name.trim().toLowerCase() === nameLower);
    if (exists) {
      setNameError?.("Advertisement with the given name already exists.");
      return;
    }
  } else {
    const exists = ads.some(
      (ad) =>
        ad.name.trim().toLowerCase() === nameLower && ad.id !== initialData.id
    );
    if (exists) {
      setNameError?.("Advertisement with the given name already exists.");
      return;
    }
  }

  setNameError?.("");

  onSubmit({
    id: initialData?.id || Math.random().toString(36).substr(2, 9),
    name,
    content,
    startDate,
    endDate,
    photoNumber,
  });

  if (onClose) onClose();
};
