import { render } from "@testing-library/react";
import Header, { HeaderProps } from "./Header";
import { noop } from "@workspace/utility";

const props: HeaderProps = {
  logo: {
    src: "https://via.placeholder.com/1500",
    alt: "Logo alt text",
    label: "Logo label",
  },
  cta: {
    label: "CTA Click",
    onClick: noop,
  },
  items: [
    { label: "Button 1", onClick: noop },
    { label: "Button2", onClick: noop },
    { label: "Button 3", onClick: noop },
    { label: "Button 4", onClick: noop },
  ],
};

describe("Header component", () => {
  it("should be rendered", () => {
    const { baseElement } = render(<Header {...props} />);

    expect(baseElement).toBeInTheDocument();
  });
});

describe("Header component logo", () => {
  it("should have a image element within", () => {
    const { getByAltText } = render(<Header {...props} />);

    const imageElement = getByAltText(props.logo?.alt ?? "");

    expect(imageElement).toBeTruthy();
  });

  it("should have the correct alt text", () => {
    const { getByAltText } = render(<Header {...props} />);

    const imageElement = getByAltText(props.logo?.alt ?? "");

    expect(imageElement).toHaveAttribute("alt", props.logo?.alt ?? "");
  });

  it("should have the correct src attribute", () => {
    const { getByAltText } = render(<Header {...props} />);

    const imageElement = getByAltText(props.logo?.alt ?? "");

    expect(imageElement).toHaveAttribute("src", props.logo?.src ?? undefined);
  });

  it("should have a label if provided via props", () => {
    const { getByAltText } = render(<Header {...props} />);

    const imageElement = getByAltText(props.logo?.alt ?? "");

    expect(imageElement).toHaveTextContent(
      props.logo?.label ?? "No label was provided"
    );
  });

  it("should not have a label if not provided via props", () => {
    const { getByAltText } = render(
      <Header
        {...{
          ...props,
          logo: {
            ...props.logo,
            label: undefined,
          },
        }}
      />
    );

    const imageElement = getByAltText(props.logo?.label ?? "no label");

    expect(imageElement).not.toHaveTextContent(
      props.logo?.label ?? "no text content"
    );
  });
});
