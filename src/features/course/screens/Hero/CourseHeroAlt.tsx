import { Box, Button, ButtonProps, Typography } from "@mui/material";
import React from "react";
import { TruncateText, TruncateTextProps } from "@workspace/components/shared";
import { DEFAULT_CourseHeroAlt_TESTING_PROPS } from "./CourseHeroAlt.fixture";

type CourseBenefit = {
  icon: React.FC;
  label: string;
};

export type CourseHeroAltProps = {
  courseName: string;
  courseDescription: string;
  courseImage: {
    url: string;
    alt: string;
  };
  PrimaryButtonProps?: ButtonProps;
  SecondaryButtonProps?: ButtonProps;
  ExpandDescriptionButtonProps?: ButtonProps;
  TruncateTextProps?: TruncateTextProps;
  courseBenefits: CourseBenefit[];
};

export const CourseHeroAlt = ({
  courseDescription,
  courseImage,
  courseName,
  PrimaryButtonProps,
  ExpandDescriptionButtonProps,
  SecondaryButtonProps,
  courseBenefits,
  TruncateTextProps,
}: CourseHeroAltProps = DEFAULT_CourseHeroAlt_TESTING_PROPS) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "0.6fr 1fr" },
        gap: "30px",
      }}
    >
      {/* Image */}

      <Box
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: "450px",
          m: 0,
          p: 0,
        }}
        component="figure"
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          component="img"
          src={courseImage.url}
          alt={courseImage.alt}
        />
      </Box>

      {/* Info Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "3rem", lg: "3.5rem" },
        }}
      >
        {/* Title */}
        <Box
          component="h1"
          sx={{
            m: 0,
            p: 0,
            fontSize: "clamp(18px, 6vw, 30px)",
            color: (theme) => theme.palette.primary.main,
            fontWeight: "bold",
          }}
        >
          {courseName}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "0.5rem" },
          }}
        >
          {/* Description */}
          <TruncateText
            numberOfLines={5}
            sx={{
              p: 0,
              m: 0,
              color: (theme) => theme.palette.primary.main,
              maxWidth: "50ch",
              textAlign: "justify",
            }}
            {...TruncateTextProps}
          >
            {courseDescription}
          </TruncateText>

          {/* Expand description button */}

          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                fontSize: { xs: "0.65em" },
                borderRadius: "8px",
                px: { xs: 3 },
                py: { xs: 0.15 },
              }}
              {...ExpandDescriptionButtonProps}
            ></Button>
          </Box>
        </Box>

        {/* Benefits */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: "15px" },
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              lg: "repeat(2, minmax(0, 1fr))",
            },
            placeItems: { xs: "center flex-start" },

            "&  svg": {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          {courseBenefits.map(({ icon: Icon, label }, index) => {
            return (
              <Box key={index} sx={{ display: "flex", gap: "1rem" }}>
                <Icon />

                <Typography
                  sx={{ fontSize: "0.75rem" }}
                  variant="body1"
                  color="primary"
                >
                  {label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Actions */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: { xs: "1rem" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ fontSize: "0.75rem" }}
            {...PrimaryButtonProps}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ fontSize: "0.75rem" }}
            {...SecondaryButtonProps}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CourseHeroAlt;
