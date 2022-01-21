import { render } from "@testing-library/react";
import Footer, { FooterProps } from "./Footer";
import { DEFAULT_FOOTER_TEST_PROPS, FOOTER_TEST_ID } from "./constants";

const renderDefault = () => {
  const result = render(<Footer {...DEFAULT_FOOTER_TEST_PROPS} />);

  return result;
};

describe("Footer component", () => {
  it("should render", () => {
    let { baseElement } = renderDefault();

    expect(baseElement).toBeInTheDocument();
  });

  it("should have a list of contacts", () => {
    let { getByTestId } = renderDefault();

    const contactsContainer = getByTestId(FOOTER_TEST_ID.CONTACTS_CONTAINER);

    expect(contactsContainer).toBeTruthy();

    contactsContainer.childNodes.forEach((node, index) => {
      expect(node).toHaveTextContent(DEFAULT_FOOTER_TEST_PROPS.contacts[index]);
    });
  });

  it("should have a list of email contacts", () => {
    const { getByTestId } = renderDefault();

    const emailContainer = getByTestId(FOOTER_TEST_ID.EMAIL_CONTACT_CONTAINER);

    expect(emailContainer).toBeInTheDocument();

    emailContainer.childNodes.forEach((node, index) => {
      expect(node).toHaveTextContent(
        DEFAULT_FOOTER_TEST_PROPS.emailContacts[index]
      );
    });
  });

  it("should have a list of social icon buttons", () => {
    const { getByTestId } = renderDefault();

    const socialContainer = getByTestId(FOOTER_TEST_ID.SOCIALS_CONTAINER);

    expect(socialContainer).toBeInTheDocument();

    expect(socialContainer.childElementCount).toBe(
      DEFAULT_FOOTER_TEST_PROPS.socials.length
    );
  });
});
