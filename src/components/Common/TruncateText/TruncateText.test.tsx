import { render } from "@testing-library/react";
import type { TruncateTextProps } from "./TruncateText";
import { DEFAULT_TruncateText_TESTING_PROPS } from "./TruncateText.fixture";
import { TruncateText } from "./TruncateText";

const setup = (
  props: TruncateTextProps = DEFAULT_TruncateText_TESTING_PROPS
) => {
  const result = render(<TruncateText {...props} />);

  return result;
};

describe("TruncateText component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
