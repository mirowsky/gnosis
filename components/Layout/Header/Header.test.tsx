import { render } from "@testing-library/react";
import Header, { HeaderProps } from "./Header";
import { noop } from "@workspace/utility";

export const TEST_ID = {
  ITEM_CONTAINER: "header-item-container",
  CALL_TO_ACTION: "header-call-to-action",
} as const;

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

    const imageElement = getByAltText(props.logo?.alt ?? "no label");

    expect(imageElement).not.toHaveTextContent(
      props.logo?.label ?? "no text content"
    );
  });

  it("should have a label if provided via props", () => {
    const { getByText } = render(<Header {...props} />);

    const imageElement = getByText(props.logo!.label!);

    expect(imageElement).toHaveTextContent(props.logo!.label!);
  });
});

describe("Header component menu items", () => {
  it("should render all menu items with appropriate labels", () => {
    const { getByTestId } = render(<Header {...props} />);

    const childNodes = getByTestId(TEST_ID.ITEM_CONTAINER).childNodes;

    childNodes.forEach((childNode, index) => {
      expect(childNode).toHaveTextContent(props.items![index].label);
    });
  });

  it("should have all menu items be clickable", () => {
    const { getByTestId } = render(<Header {...props} />);

    const childNodes = getByTestId(TEST_ID.ITEM_CONTAINER).childNodes;

    childNodes.forEach((childNode, index) => {
      expect(childNode).not.toBeDisabled();
    });
  });
});

describe("Header component call to action button", () => {
  const { getByTestId } = render(<Header {...props} />);
  const element = getByTestId(TEST_ID.CALL_TO_ACTION);

  it("should render a button", () => {
    expect(element).toBeTruthy();
  });

  it("should have the appropriate label", () => {
    expect(element).toHaveTextContent(props.cta.label);
  });

  it("should be clickable", () => {
    expect(element).not.toBeDisabled();
  });
});
