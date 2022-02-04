import { fireEvent, render } from "@testing-library/react";
import { DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS } from "./constants";
import NewsLetterSection, { NewsLetterSectionProps } from "./NewsLetterSection";

const setup = (
  props: NewsLetterSectionProps = DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS
) => {
  const result = render(<NewsLetterSection {...props} />);

  return result;
};

describe("newsletter section", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });

  it("should have an image with the appropriate src and alt text", () => {
    const { getByAltText } = setup();

    const element = getByAltText(
      DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS.img.alt
    );

    expect(element).toHaveAttribute(
      "alt",
      DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS.img.alt
    );

    expect(element).toHaveAttribute(
      "src",
      DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS.img.src
    );
  });

  it("should have an input field that changes when a change event is triggered", () => {
    const { getByRole } = setup();

    const elem = getByRole("textbox");

    fireEvent.change(elem, { target: { value: "we made it" } });

    expect((elem as HTMLInputElement).value).toBe("we made it");
  });

  it("it should have a button that should fire a callback when clicked", () => {
    const callback = jest.fn(() => {});

    const { getByRole } = setup();

    const elem = getByRole("button");

    elem.onclick = callback;

    expect(callback).toHaveBeenCalled();
    expect(elem).not.toBeDisabled();
  });

  it("the button should be disabled if the input is not valid", () => {
    const callback = jest.fn(() => {});

    const { getByRole } = setup();

    const elem = getByRole("button");
  });
});
