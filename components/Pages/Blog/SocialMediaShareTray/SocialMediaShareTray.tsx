import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import {
  WhatsApp,
  Facebook,
  Instagram,
  SvgIconComponent,
} from "@mui/icons-material";
import IconButtonFilled from "../IconButtonFilled/IconButtonFilled";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";

export interface SocialMediaShareTrayProps {
  socialMediaList?: Array<{ icon: SvgIconComponent; url: string }>;
  sx?: ThemeStyles;
  label?: string;
}

export const SocialMediaShareTray = ({
  socialMediaList = [
    { icon: WhatsApp, url: "https://placeholder.com" },
    { icon: Facebook, url: "https://placeholder.com" },
    { icon: Instagram, url: "https://placeholder.com" },
  ],
  sx,
  label = "Compartilhe a postagem em suas redes sociais",
}: SocialMediaShareTrayProps) => {
  return (
    <Box sx={{ ...defaultStyles.root, ...sx }}>
      <Box className="bar" />

      <Box className="innerContainer">
        <Typography className="typography" variant="caption">
          {label}
        </Typography>

        <Box className="socialMediaTray">
          {socialMediaList.map(({ icon: Icon, url }, index) => {
            return (
              <IconButtonFilled
                className="socialMediaTray-iconButton"
                color="secondary"
                key={index}
                icon={Icon}
                url={url}
              ></IconButtonFilled>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SocialMediaShareTray;

const defaultStyles = stylesheet.create({
  root: {
    fontSize: "10px",
    display: "flex",
    width: "20em",
    height: "16em",
    gap: 2.5,

    ".bar": {
      width: "8px",
      height: "100%",
      bgcolor: (theme) => theme.palette.secondary.main,
      borderRadius: "2.5em",
    },

    ".innerContainer": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 2.5,
    },

    ".typography": {
      fontSize: "1.1em",
      fontWeight: 600,
      color: (theme) => theme.palette.secondary.light,
    },

    ".socialMediaTray": {
      display: "flex",
      gap: 2,
    },

    ".socialMediaTray-iconButton": {
      bgcolor: (theme) => theme.palette.secondary.main,
      fontSize: "0.5em",

      ".icon": {
        fill: (theme) => theme.palette.secondary.contrastText,
      },
    },
  },
});
