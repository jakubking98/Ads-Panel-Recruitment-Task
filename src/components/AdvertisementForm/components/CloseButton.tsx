import React from "react";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { CloseButtonProps } from "../../../utils/typeScript";

const CloseButton: React.FC<CloseButtonProps> = ({ isMobile, onClose }) => {
  if (!isMobile || window.location.pathname === "/advertisements/new") {
    return null;
  }

  return (
    <IconButton
      onClick={onClose}
      style={{
        position: "absolute",
        top: isMobile ? "40px" : "10px",
        right: isMobile ? "40px" : "10px",
        color: "#4CAF50",
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
