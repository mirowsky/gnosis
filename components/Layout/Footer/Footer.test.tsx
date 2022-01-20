import { render } from "@testing-library/react";
import Footer, { FooterProps } from "./Footer";

describe("Footer core component", () => {
  it("should render the component", () => {
    const { baseElement } = render(<Footer />);

    expect(baseElement).toBeInTheDocument();
  });
});
