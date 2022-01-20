import { Story, Meta } from "@storybook/react";
import { MobileMenu, MobileMenuProps } from "./MobileDrawer";

export default {
  component: MobileMenu,
  title: "Layout/Menu/Mobile Drawer",
} as Meta;

const Template: Story<MobileMenuProps> = (args) => <MobileMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  menuItems: [
    { label: "Serviços", onClick: () => console.log("Clicked") },
    { label: "Sobre nós", onClick: () => console.log("Clicked") },
    { label: "Blog", onClick: () => console.log("Clicked") },
    { label: "Contato", onClick: () => console.log("Clicked") },
  ],
  logo: {
    src: "./images/logo.svg",
    alt: "Logo alt text",
  },
  open: true,
};
