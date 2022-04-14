import { fireEvent, render } from "@testing-library/react";
import type { SupportMenuItemProps } from "./SupportMenuItem";
import { DEFAULT_SupportMenuItem_TESTING_PROPS } from "./SupportMenuItem.fixture";
import { SupportMenuItem } from "./SupportMenuItem";

const setup = (
  props: SupportMenuItemProps = DEFAULT_SupportMenuItem_TESTING_PROPS
) => {
  const result = render(<SupportMenuItem {...props} />);

  return result;
};

describe("SupportMenuItem component", () => {
  it("should fire the assigned callback when clicked", () => {
    const callback = jest.fn(() => console.log("i was called"));

    const { getByRole, debug } = setup({
      ...DEFAULT_SupportMenuItem_TESTING_PROPS,
      onClick: callback,
    });

    const element = getByRole("button");

    fireEvent.click(element);

    expect(callback).toHaveBeenCalled();
  });

  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should have a icon and it should be marked as presentation", () => {
    const { getByRole } = setup();

    const icon = getByRole("presentation");

    expect(icon).toHaveAttribute("aria-labelledby", "Descrição acessível");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("role", "presentation");
    expect(icon).toBeVisible();
  });

  it("should have a support status tag", () => {
    const { getByLabelText } = setup();

    const tag = getByLabelText("Status do time de suporte");

    expect(tag).toBeVisible();
  });

  it("should say online when 'online' is set to true and 'offline' when set to false ", () => {
    const { getByLabelText, rerender } = setup();

    const tag = getByLabelText("Status do time de suporte");

    expect(tag).toBeVisible();

    expect(tag).toHaveTextContent("ONLINE");
  });

  it("it should have a subtitle", () => {
    const { getByText } = setup();

    const subHeaderElement = getByText(
      DEFAULT_SupportMenuItem_TESTING_PROPS.subtitle
    );

    expect(subHeaderElement).toBeVisible();

    expect(subHeaderElement).toHaveTextContent(
      DEFAULT_SupportMenuItem_TESTING_PROPS.subtitle
    );
  });

  it("it should have a title", () => {
    const { getByText } = setup();

    const headerElement = getByText(
      DEFAULT_SupportMenuItem_TESTING_PROPS.title
    );

    expect(headerElement).toBeVisible();

    expect(headerElement).toHaveTextContent(
      DEFAULT_SupportMenuItem_TESTING_PROPS.title
    );
  });
});
