import SlideIn from "./SlideIn";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

type SlideInDemoProps = {
  animate?: boolean;
};

const SlideInDemo = ({ animate }: SlideInDemoProps) => {
  return (
    <SlideIn animate={animate}>
      <Box
        // eslint-disable-next-line react/no-children-prop
        children="Im a box"
        sx={{
          bgcolor: "violet",
          borderRadius: "12px",
          width: "350px",
          height: "350px",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: { xs: "2rem" },
          fontWeight: 900,
          boxShadow: (theme) => theme.shadows[5],
        }}
      />
    </SlideIn>
  );
};

export default {
  title: "Animations/Slide in",
  component: SlideInDemo,
} as Meta<SlideInDemoProps>;

const Template: Story<SlideInDemoProps> = (props) => <SlideInDemo {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  animate: true,
};
