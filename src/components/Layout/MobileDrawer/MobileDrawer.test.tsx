import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MobileMenu, MobileMenuProps } from "./MobileDrawer";

const props: MobileMenuProps = {
  onClose: () => {},
  onOpen: () => {},
  open: true,
  menuItems: [
    { label: "Item 1", onClick: () => {} },
    { label: "Item 2", onClick: () => {} },
  ],
  logo: {
    src: "https://via.placeholder.com/1500",
    alt: "Alt Text Test",
  },
};

describe("MobileDrawer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MobileMenu {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it("should render an image tag with the logo src as a source", () => {
    const { getByAltText } = render(<MobileMenu {...props} />);

    const imageElement = getByAltText(props.logo?.alt ?? "No alt text found");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", props.logo?.src);
    expect(imageElement).toHaveAttribute("alt", props.logo?.alt);
  });

  it("renders the items in the list received via props and theyre clickable, when the drawer is open", () => {
    const { getByText } = render(
      <MobileMenu
        {...{
          ...props,
          open: true,
          menuItems: [
            { label: "Orange", onClick: () => {} },
            { label: "Apple", onClick: () => {} },
          ],
        }}
      />
    );

    const firstITem = getByText(/Apple/i);
    const secondItem = getByText(/Orange/i);

    expect(firstITem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();
    expect(firstITem).not.toBeDisabled();
    expect(secondItem).not.toBeDisabled();
  });
});
