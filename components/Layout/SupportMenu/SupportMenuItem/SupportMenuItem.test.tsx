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
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should have a icon and it should be marked as presentation", () => {
    const { getByRole } = setup();

    const icon = getByRole("presentation");

    expect(icon).toHaveAccessibleDescription("Descrição acessível");
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

    rerender(
      <SupportMenuItem
        {...{ ...DEFAULT_SupportMenuItem_TESTING_PROPS, online: false }}
      />
    );

    expect(tag).toHaveTextContent("OFFLINE");
  });

  it("should fire the assigned callback when clicked", () => {
    const callback = jest.fn(() => {});

    const { baseElement } = setup({
      ...DEFAULT_SupportMenuItem_TESTING_PROPS,
      onClick: callback,
    });

    fireEvent.click(baseElement);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls.length).toBe(1);
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
