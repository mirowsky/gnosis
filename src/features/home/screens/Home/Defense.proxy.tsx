import { DefenseSectionProps, DefenseSection } from "../Defense/DefenseSection";
import {
  AssuredWorkloadTwoTone,
  School,
  AccessTime,
  CastForEducation,
  HistoryEdu,
  SupportAgent,
} from "@mui/icons-material";
import { ThemeStyles } from "@workspace/types";

export type DefenseProxyProps = {
  sx?: ThemeStyles;
};

export const DefenseProxy = ({ sx }: DefenseProxyProps) => {
  return (
    <DefenseSection
      {...{
        sx: sx,
        items: [
          {
            icon: AssuredWorkloadTwoTone,
            label: "Cursos reconhecidos pelo MEC",
          },
          { icon: School, label: "Cursos 100% EAD" },
          { icon: AccessTime, label: "Cursos intensivos e extensivos" },
          { icon: CastForEducation, label: "Ambiente de aprendizado online" },
          { icon: HistoryEdu, label: "TCC opcional" },
          { icon: SupportAgent, label: "Suporte personalizado" },
        ],
      }}
    />
  );
};
