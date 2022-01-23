import { render, fireEvent } from "@testing-library/react";
import { DEFAULT_HERO_TESTING_PROPS } from "./contants";
import Hero, { HeroProps } from "./Hero";

const setup = (props: HeroProps = DEFAULT_HERO_TESTING_PROPS) => {
  const result = render(<Hero {...props} />);

  return result;
};

describe("Hero screen component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });

  it("should have a heading component containing the hero text", () => {
    const { getByText } = setup();

    const heading = getByText(DEFAULT_HERO_TESTING_PROPS.mainText);

    expect(heading).toHaveTextContent(DEFAULT_HERO_TESTING_PROPS.mainText);
  });

  it("should have a heading with a complimentary text", () => {
    const { getByText } = setup();

    const heading = getByText(DEFAULT_HERO_TESTING_PROPS.altText);

    expect(heading).toHaveTextContent(DEFAULT_HERO_TESTING_PROPS.altText);
  });

  it("should have a primary button and it should fire a callback", () => {
    const mockCallback = jest.fn(() => {});

    const { getByText } = setup({
      ...DEFAULT_HERO_TESTING_PROPS,
      ctaPrimary: {
        ...DEFAULT_HERO_TESTING_PROPS.ctaPrimary,
        onClick: mockCallback,
      },
    });

    const button = getByText(DEFAULT_HERO_TESTING_PROPS.ctaPrimary.label);

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockCallback).toHaveBeenCalled();

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it("should have a second button and it should fire a callback when clicked", () => {
    const mockCallback = jest.fn(() => {});

    const { getByText } = setup({
      ...DEFAULT_HERO_TESTING_PROPS,
      ctaSecondary: {
        ...DEFAULT_HERO_TESTING_PROPS.ctaSecondary,
        onClick: mockCallback,
      },
    });

    const button = getByText(DEFAULT_HERO_TESTING_PROPS.ctaSecondary.label);

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockCallback).toHaveBeenCalled();

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it("should have an image component with the assigned alt text and correct src", () => {
    const { getByAltText } = setup();

    const imageElement = getByAltText(DEFAULT_HERO_TESTING_PROPS.img.alt);

    expect(imageElement).toBeInTheDocument();

    expect(imageElement).toHaveAttribute(
      "src",
      DEFAULT_HERO_TESTING_PROPS.img.src
    );

    expect(imageElement).toHaveAttribute(
      "alt",
      DEFAULT_HERO_TESTING_PROPS.img.alt
    );
  });
});
