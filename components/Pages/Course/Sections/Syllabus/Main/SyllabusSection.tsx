/* eslint-disable react/jsx-key */
import { Box } from "@mui/material";
import { TabbedContainer } from "@workspace/components/common";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import SyllabusItem, { SyllabusItemProps } from "../SyllabusItem/SyllabusItem";

type EMEC = {
  img: {
    src: string;
    alt: string;
  };
  url: {
    href: string;
    label: string;
  };
};

export interface SyllabusSectionProps {
  activeIndex: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  syllabusItems: SyllabusItemProps[];
  prerequisites: string;
  emec: EMEC;
  sx?: ThemeStyles;
}

export const SyllabusSection = ({
  emec,
  prerequisites,
  syllabusItems,
  activeIndex = 0,
  handleChange = () => {},
  sx,
}: SyllabusSectionProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <TabbedContainer
        tabPanelStyles={{ maxHeight: "500px", overflow: "scroll" }}
        items={[
          <SyllabusGrid items={syllabusItems} />,
          <SyllabusPrerequisites prerequisites={prerequisites} />,
          <SyllabusEMEC emec={emec} />,
        ]}
        TabProps={{
          activeIndex: activeIndex,
          handleChange: handleChange,
          centered: true,
          tabLabels: ["Matriz curricular", "Pré-requisitos", "E-MEC"],
        }}
      />
    </Box>
  );
};

const SyllabusEMEC = ({ emec }: { emec: EMEC }) => {
  return (
    <Box sx={styles.syllabusEMECContainer}>
      <Box
        sx={styles.syllabusEMECImage}
        component="img"
        role="img"
        src={emec.img.src}
        alt={emec.img.alt}
      />

      <Box component="a" href={emec.url.href} sx={styles.syllabusEMECURL}>
        {emec.url.label}
      </Box>
    </Box>
  );
};

const SyllabusPrerequisites = ({
  prerequisites,
}: {
  prerequisites: string;
}) => {
  return <Box sx={styles.syllabusPrerequisites}>{prerequisites}</Box>;
};

const SyllabusGrid = ({ items }: { items: SyllabusItemProps[] }) => {
  return (
    <Box sx={styles.syllabusGrid}>
      {items.map((item, index) => {
        return (
          <SyllabusItem
            {...item}
            key={index}
            fontSize={{ xs: "0.65rem", lg: "0.85rem" }}
          />
        );
      })}
    </Box>
  );
};

export default SyllabusSection;

const styles = stylesheet.create({
  root: {},

  syllabusGrid: {
    display: "flex",
    flexDirection: "column",
    gap: (theme) => theme.spacing(3),
  },
  syllabusCourseType: {},
  syllabusPrerequisites: {},

  syllabusEMECContainer: {
    height: "300px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: (theme) => theme.spacing(4),
  },
  syllabusEMECImage: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
  syllabusEMECURL: {},
});
