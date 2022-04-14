import { render } from "@testing-library/react";
import type { IconButtonFilledProps } from "./IconButtonFilled";
import { DEFAULT_IconButtonFilled_TESTING_PROPS } from "./IconButtonFilled.fixture";
import { IconButtonFilled } from "./IconButtonFilled";
import React from "react";
import { ButtonBaseProps } from "@mui/material";

const setup = (
  props: IconButtonFilledProps = DEFAULT_IconButtonFilled_TESTING_PROPS
) => {
  const result = render(
    <IconButtonFilled
      {...(props as IconButtonFilledProps & {
        ref: React.RefObject<ButtonBaseProps>;
      })}
    />
  );

  return result;
};

describe("IconButtonFilled component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
