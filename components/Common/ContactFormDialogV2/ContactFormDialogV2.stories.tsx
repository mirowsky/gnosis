import type { ContactFormDialogV2Props } from "./ContactFormDialogV2";
import ContactFormDialogV2 from "./ContactFormDialogV2";
import { DEFAULT_ContactFormDialogV2_TESTING_PROPS } from "./ContactFormDialogV2.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "General Components/Contact Form Dialog V2/Main",
  component: ContactFormDialogV2,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
  argTypes: {
    open: {
      control: "boolean",
    },
    BackdropProps: {
      control: false,
    },
    EmailInputProps: {
      control: false,
    },
    MessageInputProps: {
      control: false,
    },
    NameInputProps: {
      control: false,
    },
    PhoneInputProps: {
      control: false,
    },
    PrimaryActionProps: {
      control: false,
    },
    SecondaryActionProps: {
      control: false,
    },
  },
} as Meta<ContactFormDialogV2Props & { open?: boolean }>;

const Template: Story<ContactFormDialogV2Props & { open?: boolean }> = ({
  open,
  ...props
}) => {
  return (
    <ContactFormDialogV2
      {...props}
      BackdropProps={{ ...props.BackdropProps, open: open }}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactFormDialogV2_TESTING_PROPS,
};

Primary.decorators = [
  (Story) => (
    <Box>
      <Box>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, quidem
        vero sunt itaque beatae earum repellat modi vitae tenetur asperiores
        labore ab autem perspiciatis. Harum, tenetur veritatis eos distinctio,
        minima unde, expedita obcaecati nemo maiores quidem maxime sapiente quos
        voluptas praesentium sit at vitae minus sint. Aspernatur, cupiditate,
        natus adipisci quasi necessitatibus sapiente eum aperiam laboriosam eius
        enim repellat odit quisquam obcaecati dicta ut? Eveniet quos nemo
        eligendi aliquid quidem, dicta incidunt! Quis harum minima sed corrupti
        officiis saepe minus debitis aliquam cumque quam sequi veniam dolore
        sint incidunt officia, optio repellendus fugiat. Exercitationem mollitia
        dolor consequuntur voluptas provident illum accusantium iure
        reprehenderit in omnis et neque praesentium, officiis quas consequatur
        animi? Ex cumque voluptates exercitationem quibusdam pariatur inventore
        sint ea excepturi doloribus, provident iusto impedit veniam. Molestiae
        provident saepe tenetur dicta neque obcaecati tempore, natus sed, minus,
        consectetur fuga eaque iure sint quo exercitationem quaerat nisi
        suscipit cupiditate magni quidem enim tempora. Iste minus ad nesciunt
        pariatur nam facere repellat totam, cumque vel quae aliquam. Beatae aut
        doloribus, molestias inventore accusamus labore eos laboriosam dolorum
        illum reprehenderit ipsa, doloremque consequuntur nostrum repudiandae
        placeat ab. Dolorum praesentium nobis debitis quidem explicabo dolores
        harum perspiciatis quia. Praesentium et expedita quaerat beatae labore
        dignissimos optio culpa, ea vero eveniet id laborum exercitationem
        debitis odio accusantium fugiat, maiores temporibus fugit, quam quisquam
        unde tempore perspiciatis repellat officia! Recusandae sint ipsa dolorem
        sit amet saepe alias nesciunt voluptate aut itaque aperiam, eveniet
        deleniti reiciendis qui ratione quisquam nobis explicabo possimus
        consectetur a molestiae quae?
      </Box>{" "}
      <Story />
    </Box>
  ),
];
