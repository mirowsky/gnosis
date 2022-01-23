import MainLayout, { MainLayoutProps } from "./MainLayout";
import { render } from "@testing-library/react";
import { MAIN_LAYOUT_DEFAULT_PROPS, MAIN_LAYOUT_TEST_ID } from "./constants";

const setup = (props: MainLayoutProps = MAIN_LAYOUT_DEFAULT_PROPS) => {
  const result = render(<MainLayout {...props} />);

  return result;
};

describe("Main layout wrapper component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
