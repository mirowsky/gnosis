import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";

type ThemeCSSProperties = {
  [key: string]: SxProps<Theme>;
};

export class AtlasStylesheet {
  public static create<Styles extends ThemeCSSProperties>(
    styles: Styles
  ): Styles {
    return styles;
  }
}

export default AtlasStylesheet;
