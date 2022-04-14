import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  AnimatedBurguerButtonProps,
  AnimatedBurguerMenu,
} from "./AnimatedBurguerButton";

const ANIMATION_CONTAINER_ID = "animated-burguer-container";

describe("AnimatedBurguerMenu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AnimatedBurguerMenu open={false} />);
    expect(baseElement).toBeTruthy();
  });

  // Could return a false negative if animation parameters are changed due to callback timeout being insufficient
  it("Should have the correct styling if opened after animation is finished", async () => {
    const { getByTestId } = render(<AnimatedBurguerMenu open={true} />);

    const container = getByTestId(ANIMATION_CONTAINER_ID);
    const lineOne = container.childNodes[0];
    const lineTwo = container.childNodes[1];
    const lineThree = container.childNodes[2];

    await waitFor(
      () => {
        expect(lineOne).toHaveStyle({
          transform: "translateY(2em) rotate(45deg) translateZ(0)",
        });

        expect(lineTwo).toHaveStyle({
          transform: "rotate(-45deg) translateZ(0)",
          width: "100%",
        });

        expect(lineThree).toHaveStyle({
          opacity: 0,
          transform: "translateY(-2em) translateZ(0)",
        });
      },
      { timeout: 1500 }
    );
  });
});
