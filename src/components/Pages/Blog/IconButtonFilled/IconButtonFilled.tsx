/* eslint-disable react/display-name */
import { SvgIconComponent } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  ButtonBase,
  ButtonBaseProps,
  SvgIcon,
} from "@mui/material";
import stylesheet from "src/theme/stylesheet";
import React from "react";

export interface IconButtonFilledProps extends BoxProps<typeof ButtonBase> {
  icon: SvgIconComponent;
  url: string;
  color?: "primary" | "secondary";
}

export const IconButtonFilled = React.forwardRef<
  ButtonBaseProps,
  IconButtonFilledProps
>(({ icon: Icon, url, sx, color, ...props }, ref) => {
  const styles = React.useMemo(() => _styles(color), [color]);

  return (
    <Box
      {...props}
      sx={{ ...styles.root, ...sx }}
      component={ButtonBase}
      ref={ref}
    >
      <a className="link" target="_blank" href={url} rel="noreferrer">
        <SvgIcon className="icon" component={Icon}></SvgIcon>
      </a>
    </Box>
  );
});

export default IconButtonFilled;

const _styles = (color: "primary" | "secondary" = "primary") =>
  stylesheet.create({
    root: {
      display: "flex",
      fontSize: "1rem",
      width: "auto",
      height: "auto",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      p: 1,
      bgcolor: (theme) => theme.palette[color].main,

      ".link": {
        outline: "none",
        color: "inherit",
        p: 0,
        m: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      ".icon": {
        fill: (theme) => theme.palette[color].contrastText,

        "& > svg": {
          fontSize: "2.2em",
        },
      },
    },
  });
