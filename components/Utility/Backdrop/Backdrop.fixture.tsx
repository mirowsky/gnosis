import { Box } from "@mui/material";
import type { BackdropProps } from "./Backdrop";

export const DEFAULT_Backdrop_TESTING_PROPS: BackdropProps = {
  open: false,
  sx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  children: (
    <Box
      sx={{
        width: "250px",
        height: "250px",
        bgcolor: "violet",
        borderRadius: "12px",
      }}
    ></Box>
  ),
};

export const Backdrop_TEST_ID = {} as const;
