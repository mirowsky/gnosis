import type { TabPanelProps } from "./TabPanel";

export const DEFAULT_TabPanel_TESTING_PROPS: TabPanelProps = {
  index: 0,
  value: 0,
  children: <div>{"Hello world, Im visible!"}</div>,
};

export const TabPanel_TEST_ID = {} as const;
