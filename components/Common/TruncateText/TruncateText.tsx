import { Typography } from "@mui/material";
import { useIsomorphicEffect } from "@workspace/hooks";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { Properties } from "csstype";
import { ResponsiveFontSize, ResponsiveStyleValue } from "@workspace/types";

export type TruncateTextProps = {
  numberOfLines?: number;
  lineHeight?: Properties["lineHeight"];
  fontSize?: ResponsiveStyleValue<Properties["fontSize"]>;
};

export const TruncateText = ({
  numberOfLines,
  fontSize = { xs: "1rem" },
  lineHeight = 1.75,
}: TruncateTextProps) => {
  const styles = React.useMemo(
    () => _styles(numberOfLines, fontSize, lineHeight),
    [numberOfLines, fontSize, lineHeight]
  );

  return (
    <Typography sx={styles.root} variant="body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur vel
      est enim natus ut reprehenderit nostrum iste quia obcaecati id mollitia
      animi eos, similique soluta sapiente. Perferendis autem laudantium
      molestias officia eos iste quia placeat natus nisi, nam odit maiores
      explicabo odio quo? Non sit id harum similique maiores. Quis fugiat porro
      blanditiis. Laboriosam exercitationem quas sint eius inventore, iusto hic.
      Ex aspernatur nulla sit, blanditiis nihil doloribus quam vitae quae
      voluptate doloremque odit rem sunt in cumque. Nihil, blanditiis delectus
      nisi nemo, aperiam cum et possimus at vero exercitationem sint quasi ex
      mollitia deleniti est distinctio nam totam?
    </Typography>
  );
};

export default TruncateText;

const _styles = (
  lines = 100,
  fontSize: ResponsiveFontSize = { xs: "1rem" },
  lineHeight: Properties["lineHeight"] = 1.75
) =>
  stylesheet.create({
    root: {
      fontSize: fontSize,
      lineHeight: lineHeight,
      maxHeight: `calc(${fontSize.xs as string} * ${lineHeight} * ${lines})`,
      overflow: "hidden",
      transition: "max-height 0.75s ease",
      position: "relative",
      maxWidth: "35ch",
      paddingRight: "1rem",

      "::after": {
        content: `""`,
        textAlign: "right",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "75%",
        height: `calc(${fontSize.xs as string} * ${lineHeight})`,
        background:
          "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)",
      },
    },
  });

//   line of text height = fontSize * lineHeight * numberOfLines
