import {
  InventorySharp,
  Support,
  Timelapse,
  WhatsApp,
} from "@mui/icons-material";
import { DEFAULT_OverviewItem_TESTING_PROPS } from "../../components/OverviewItem/OverviewItem.fixture";
import type { OverviewSectionProps } from "./OverviewSection";

const item = DEFAULT_OverviewItem_TESTING_PROPS;

export const DEFAULT_OverviewSection_TESTING_PROPS: OverviewSectionProps = {
  items: [
    { ...item, icon: Timelapse },
    { ...item, icon: WhatsApp },
    { ...item, icon: Support },
    { ...item, icon: InventorySharp },
  ],
};

export const OverviewSection_TEST_ID = {} as const;
