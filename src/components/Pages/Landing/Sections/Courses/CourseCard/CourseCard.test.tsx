import { fireEvent, render } from "@testing-library/react";
import {
  COURSE_CARD_TEST_ID,
  DEFAULT_COURSE_CARD_TEST_PROPS,
} from "./constants";
import CourseCard, { CourseCardProps } from "./CourseCard";

const setup = (props: CourseCardProps = DEFAULT_COURSE_CARD_TEST_PROPS) => {
  const result = render(<CourseCard {...props} />);

  return result;
};

describe("Course card component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });

  it("should contain a title", () => {
    const { getByText } = setup();

    const elementTitle = getByText(DEFAULT_COURSE_CARD_TEST_PROPS.title);

    expect(elementTitle).toBeInTheDocument();
  });

  it("should have an image with the appropriate src and alt text abc", () => {
    const { getByAltText } = setup();

    const imageElement = getByAltText(DEFAULT_COURSE_CARD_TEST_PROPS.img.alt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "alt",
      DEFAULT_COURSE_CARD_TEST_PROPS.img.alt
    );
    expect(imageElement).toHaveAttribute(
      "src",
      DEFAULT_COURSE_CARD_TEST_PROPS.img.src
    );
  });

  it("should display all tags", () => {
    const { getByTestId, getByText } = setup();

    const tagContainerElement = getByTestId(COURSE_CARD_TEST_ID.TAG_CONTAINER);

    DEFAULT_COURSE_CARD_TEST_PROPS.tags.forEach(
      ({ icon: Icon, label }, index) => {
        const labelComponent = getByText(label);
        const iconComponent = labelComponent.previousSibling;

        expect(iconComponent).toBeInTheDocument();
        expect(labelComponent).toBeInTheDocument();
      }
    );
  });

  it("should contain two buttons", () => {
    const { getByTestId } = setup();

    const buttonContainerElement = getByTestId(
      COURSE_CARD_TEST_ID.BUTTON_CONTAINER
    );

    buttonContainerElement.childNodes.forEach((node, index) => {
      expect(node).toBeInTheDocument();
    });
  });

  it("should fire a callback whenever a button is clicked", () => {
    const primaryCallbackMock = jest.fn(() => "first callback fired");
    const secondaryCallbackMock = jest.fn(() => "second callback fired");

    const { getByTestId } = setup({
      ...DEFAULT_COURSE_CARD_TEST_PROPS,
      primaryAction: {
        ...DEFAULT_COURSE_CARD_TEST_PROPS.primaryAction,
        onClick: primaryCallbackMock,
      },
      secondaryAction: {
        ...DEFAULT_COURSE_CARD_TEST_PROPS.secondaryAction,
        onClick: secondaryCallbackMock,
      },
    });

    const buttonContainerElement = getByTestId(
      COURSE_CARD_TEST_ID.BUTTON_CONTAINER
    );

    const primaryButton = buttonContainerElement.childNodes[0];
    const secondaryButton = buttonContainerElement.childNodes[1];

    fireEvent.click(primaryButton);
    fireEvent.click(secondaryButton);

    expect(primaryCallbackMock).toHaveBeenCalled();
    expect(primaryCallbackMock.mock.calls.length).toBe(1);

    expect(secondaryCallbackMock).toHaveBeenCalled();
    expect(secondaryCallbackMock.mock.calls.length).toBe(1);
  });
});
