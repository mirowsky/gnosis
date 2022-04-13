import { Meta, Story } from "@storybook/react";
import { useDetectMobile } from "..";

type UseDetectMobileDemoProps = {};

const UseDetectMobileDemo = (props: UseDetectMobileDemoProps) => {
  const isMobile = useDetectMobile();

  return <h1>{`The device is ${isMobile ? "mobile" : "not mobile"}`}</h1>;
};

export default {
  title: "Hooks/Use Detect Mobile",
  component: UseDetectMobileDemo,
} as Meta<UseDetectMobileDemoProps>;

const Template: Story<UseDetectMobileDemoProps> = (props) => (
  <UseDetectMobileDemo {...props} />
);

export const Primary = Template.bind({});

Primary.args = {};
