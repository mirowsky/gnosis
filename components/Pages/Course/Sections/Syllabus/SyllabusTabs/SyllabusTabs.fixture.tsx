import type { SyllabusTabsProps } from "./SyllabusTabs";

export const DEFAULT_SyllabusTabs_TESTING_PROPS: SyllabusTabsProps = {
  items: [
    {
      content: <div>Hello world</div>,
      label: "Label 1",
    },
    {
      content: <div>Goodbye, world!</div>,
      label: "Label 2",
    },
    {
      content: <div>Hello again, world!</div>,
      label: "Label 3",
    },
  ],
  activeIndex: 0,
  handleChange: () => {},
};

export const SyllabusTabs_TEST_ID = {} as const;
