import {
  AccessTime,
  AssuredWorkloadTwoTone,
  CastForEducation,
  HistoryEdu,
  School,
  SupportAgent,
} from "@mui/icons-material";

export const createDefenseSection = (): DefenseSectionProps => {
  return {
    items: [
      { icon: AssuredWorkloadTwoTone, label: "Cursos reconhecidos pelo MEC" },
      { icon: School, label: "Cursos 100% EAD" },
      { icon: AccessTime, label: "Cursos intensivos e extensivos" },
      { icon: CastForEducation, label: "Ambiente de aprendizado online" },
      { icon: HistoryEdu, label: "TCC opcional" },
      { icon: SupportAgent, label: "Suporte personalizado" },
    ],
  };
};
