import { render } from "@testing-library/react";
import type { SocialMediaShareTrayProps } from "./SocialMediaShareTray";
import { DEFAULT_SocialMediaShareTray_TESTING_PROPS } from "./SocialMediaShareTray.fixture";
import { SocialMediaShareTray } from "./SocialMediaShareTray";

const setup = (
  props: SocialMediaShareTrayProps = DEFAULT_SocialMediaShareTray_TESTING_PROPS
) => {
  const result = render(<SocialMediaShareTray {...props} />);

  return result;
};

describe("SocialMediaShareTray component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
