/* eslint-disable react/jsx-key */
import type { TabbedContainerProps } from "./TabbedContainer";

export const DEFAULT_TabbedContainer_TESTING_PROPS: TabbedContainerProps = {
  TabProps: {
    activeIndex: 0,
    handleChange: () => {},
    tabLabels: ["Label n1", "Label n2", "Label n3"],
    centered: true,
  },
  items: [
    <div>This is the first item</div>,
    <div>and this is the second item</div>,
    <div>This is the third and final item</div>,
  ],
};

export const TabbedContainer_TEST_ID = {} as const;
