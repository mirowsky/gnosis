import { render } from "@testing-library/react";
import CuteButton from "./CuteButton";

describe("Cute Button", () => {
  it("should be rendered", () => {
    const { baseElement } = render(<CuteButton />);

    expect(baseElement).toBeInTheDocument();
  });
});
