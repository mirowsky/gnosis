import { Box } from "@mui/material";
import { MotionBox } from "..";
import type { BackdropProps } from "./Backdrop";

export const DEFAULT_Backdrop_TESTING_PROPS: BackdropProps = {
  onClickAway: () => console.log("clicked away"),
  open: false,
  sx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  children: (
    <MotionBox
      sx={{
        width: "250px",
        height: "250px",
        bgcolor: "violet",
        borderRadius: "12px",
      }}
    ></MotionBox>
  ),
};

export const Backdrop_TEST_ID = {} as const;
