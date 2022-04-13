import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import {
  WhatsApp,
  Facebook,
  Instagram,
  SvgIconComponent,
} from "@mui/icons-material";
import IconButtonFilled from "../IconButtonFilled/IconButtonFilled";
import stylesheet from "src/theme/stylesheet";
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
    fontSize: "0.85rem",
    display: "flex",
    width: "fit-content",
    height: "auto",
    gap: 3.5,

    ".bar": {
      width: "5px",
      height: "auto",
      bgcolor: (theme) => theme.palette.secondary.main,
      borderRadius: "2.5em",
    },

    ".innerContainer": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 3.5,
    },

    ".typography": {
      fontSize: "1em",
      fontWeight: 600,
      maxWidth: "20ch",
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
        fontSize: "3em",
      },
    },
  },
});
