import { render } from "@testing-library/react";
import Footer, { FooterProps } from "./Footer";
import { DEFAULT_FOOTER_TEST_PROPS, FOOTER_TEST_ID } from "./constants";

describe("Footer core component", () => {
  it("should render the component", () => {
    const { baseElement } = render(<Footer {...DEFAULT_FOOTER_TEST_PROPS} />);

    expect(baseElement).toBeInTheDocument();
  });
});

describe("Footer contact list", () => {
  const { getByTestId, baseElement } = render(
    <Footer {...DEFAULT_FOOTER_TEST_PROPS} />
  );

  it("should render", () => {
    const element = getByTestId(FOOTER_TEST_ID.CONTACTS_CONTAINER);

    expect(element).toBeInTheDocument();
  });

  it("should render all contacts", () => {
    const childNodes = getByTestId(
      FOOTER_TEST_ID.CONTACTS_CONTAINER
    ).childNodes;

    childNodes.forEach((childNode, index) => {
      expect(childNode).toHaveTextContent(
        DEFAULT_FOOTER_TEST_PROPS.contacts[index]
      );
    });
  });
});

describe("Footer email list", () => {
  const { getByTestId, baseElement } = render(
    <Footer {...DEFAULT_FOOTER_TEST_PROPS} />
  );

  it("should render", () => {
    const element = getByTestId(FOOTER_TEST_ID.EMAIL_CONTACT_CONTAINER);

    expect(element).toBeInTheDocument();
  });

  it("should render all emails acquired via props", () => {
    const childNodes = getByTestId(
      FOOTER_TEST_ID.EMAIL_CONTACT_CONTAINER
    ).childNodes;

    childNodes.forEach((childNode, index) => {
      expect(childNode).toHaveTextContent(
        DEFAULT_FOOTER_TEST_PROPS.emailContacts[index]
      );
    });
  });
});

describe("Footer social icons", () => {
  const { getByTestId, baseElement } = render(
    <Footer {...DEFAULT_FOOTER_TEST_PROPS} />
  );

  it("should have a container that will host the list", () => {
    const element = getByTestId(FOOTER_TEST_ID.SOCIALS_CONTAINER);

    expect(element).toBeInTheDocument();
  });

  it("should render the social icons within the footer", () => {
    const childNodes = getByTestId(FOOTER_TEST_ID.SOCIALS_CONTAINER).childNodes;

    childNodes.forEach((childNode, index) => {
      expect(childNode).toBeTruthy();
    });
  });
});
