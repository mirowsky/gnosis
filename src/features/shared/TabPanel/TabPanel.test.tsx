import { render } from "@testing-library/react";
import type { TabPanelProps } from "./TabPanel";
import { DEFAULT_TabPanel_TESTING_PROPS } from "./TabPanel.fixture";
import { TabPanel } from "./TabPanel";

const setup = (props: TabPanelProps = DEFAULT_TabPanel_TESTING_PROPS) => {
  const result = render(<TabPanel {...props} />);

  return result;
};

describe("TabPanel component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
