import { Components, Theme } from "@mui/material";
import { buttonOverride, buttonBaseOverride } from "./button";
import cssBaselineOverride from "./cssBaseline";

const components = (theme: Theme): Components => {
  return {
    MuiButton: buttonOverride(theme),
    MuiButtonBase: buttonBaseOverride(theme),
    MuiCssBaseline: cssBaselineOverride(theme),
  };
};

export default components;
