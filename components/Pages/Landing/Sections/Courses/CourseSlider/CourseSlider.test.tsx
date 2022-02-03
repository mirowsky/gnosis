import { createEvent, fireEvent, render } from "@testing-library/react";
import {
  COURSE_SLIDER_TEST_ID,
  DEFAULT_COURSE_SLIDER_TEST_PROPS,
} from "./constants";
import CourseSlider, { CourseSliderProps } from "./CourseSlider";
import React from "react";

const setup = (props: CourseSliderProps = DEFAULT_COURSE_SLIDER_TEST_PROPS) => {
  const result = render(<CourseSlider {...props} />);

  return result;
};

describe("Course section sli der", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });

  it("should display all the cards", () => {
    const { getByTestId } = setup();

    const containerEl = getByTestId(COURSE_SLIDER_TEST_ID.CONTAINER);

    const wrapperEl = containerEl.childNodes[0];

    expect(wrapperEl.childNodes.length).toBe(
      DEFAULT_COURSE_SLIDER_TEST_PROPS.items.length
    );

    wrapperEl.childNodes.forEach((node, index) => {
      expect(node).toBeInTheDocument();
    });
  });

  it("should have navigation buttons that fire a callback when clicked", () => {
    const mockFn = jest.fn(() => {});

    const { getByTestId } = setup();

    const prevButtonElement = getByTestId(COURSE_SLIDER_TEST_ID.PREV_BUTTON);
    const nextButtonElement = getByTestId(COURSE_SLIDER_TEST_ID.NEXT_BUTTON);

    expect(prevButtonElement).toBeInTheDocument();
    expect(nextButtonElement).toBeInTheDocument();

    prevButtonElement.click = mockFn;

    fireEvent.click(prevButtonElement);

    expect(mockFn.mock.calls).toBe(1);
    expect(mockFn).toHaveBeenCalled();
  });
});
