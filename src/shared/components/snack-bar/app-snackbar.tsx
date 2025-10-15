import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface AppSnackbarProps {
  open: boolean;
  message: string;
  severity?: "success" | "error";
  onClose: () => void;
  autoHideDuration?: number;
}

const AppSnackbar: React.FC<AppSnackbarProps> = ({
  open,
  message,
  severity = "success",
  onClose,
  autoHideDuration = 3000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 3 }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        icon={false}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderRadius: "8px",
          backgroundColor: severity === "success" ? "#4caf50" : "#f44336",
          color: "#fff",
          fontWeight: 500,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {severity === "success" ? "✅" : "❌"} {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
