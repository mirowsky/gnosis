import * as React from "react";
import { Alert, Snackbar, Stack } from "@mui/material";
import create from "zustand";

export interface AlertState {
  open: boolean;
  message: string;
  severity: "warning" | "success" | "error" | "info";
  origin?: {
    horizontal: "left" | "center" | "right";
    vertical: "top" | "bottom";
  };
}

export interface AlertActions {
  dispatch: (alert: Omit<AlertState, "open">) => void;
  toggleVisibility: (open: boolean) => void;
}

export function GlobalSnack() {
  const alertVisible = alertStore((state) => state.open);
  const alertSeverity = alertStore((state) => state.severity);
  const alertMessage = alertStore((state) => state.message);
  const alertOrigin = alertStore((state) => state.origin);
  const toggleAlertVisibility = alertStore((state) => state.toggleVisibility);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={alertVisible}
        autoHideDuration={6000}
        anchorOrigin={alertOrigin}
        onClose={() => toggleAlertVisibility(false)}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity={alertSeverity}
          sx={{ width: "100%", fontSize: "1.5rem" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default GlobalSnack;

export const alertStore = create<AlertState & AlertActions>((set) => ({
  open: false,
  message: "",
  severity: "info",
  origin: {
    horizontal: "center",
    vertical: "bottom",
  },
  toggleVisibility: (open) =>
    set((state) => ({
      ...state,
      open: open,
    })),
  dispatch: (alert) =>
    set((state) => ({
      ...state,
      open: true,
      message: alert.message,
      severity: alert.severity,
    })),
}));
