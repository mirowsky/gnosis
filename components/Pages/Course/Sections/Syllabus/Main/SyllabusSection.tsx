/* eslint-disable react/jsx-key */
import { Box } from "@mui/material";
import {
  TabbedContainer,
  TabbedContainerProps,
} from "@workspace/components/common";
import stylesheet from "@workspace/stylesheet";
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
  handleChange: (...args: unknown[]) => void;
  syllabusItems: SyllabusItemProps[];
  courseType: string;
  prerequisites: string;
  emec: EMEC;
}

export const SyllabusSection = ({
  courseType,
  emec,
  prerequisites,
  syllabusItems,
  activeIndex = 0,
  handleChange = () => {},
}: SyllabusSectionProps) => {
  return (
    <Box sx={styles.root}>
      <TabbedContainer
        items={[
          <SyllabusGrid items={syllabusItems} />,
          <SyllabusCourseType type={courseType} />,
          <SyllabusPrerequisites prerequisites={prerequisites} />,
          <SyllabusEMEC emec={emec} />,
        ]}
        TabProps={{
          activeIndex: activeIndex,
          handleChange: handleChange,
          centered: true,
          tabLabels: [
            "Matriz curricular",
            "Modalidade",
            "Pré-requisitos",
            "E-MEC",
          ],
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

const SyllabusCourseType = ({ type }: { type: string }) => {
  return <Box sx={styles.syllabusCourseType}>{type}</Box>;
};

const SyllabusGrid = ({ items }: { items: SyllabusItemProps[] }) => {
  return (
    <Box sx={styles.syllabusGrid}>
      {items.map((item, index) => {
        <SyllabusItem {...item} key={index} />;
      })}
    </Box>
  );
};

export default SyllabusSection;

const styles = stylesheet.create({
  root: {},

  syllabusGrid: {},
  syllabusCourseType: {},
  syllabusPrerequisites: {},

  syllabusEMECContainer: {},
  syllabusEMECImage: {},
  syllabusEMECURL: {},
});
