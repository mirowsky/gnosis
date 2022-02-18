import { Box } from "@mui/material";
import { Story, Meta } from "@storybook/react";
import { useIntersectionObserver } from "..";

type IntersectionObserverHookDemoProps = {};

const IntersectionObserverHookDemo = (
  props: IntersectionObserverHookDemoProps
) => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <Box
      component="div"
      ref={ref}
      sx={{
        width: "350px",
        height: "350px",
        borderRadius: "12px",
        bgcolor: "violet",
        boxShadow: (theme) => theme.shadows[4],
        color: "#fff",
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Im a block with text
    </Box>
  );
};

export default {
  title: "Hooks/Use Intersection Observer",
  component: IntersectionObserverHookDemo,
} as Meta<IntersectionObserverHookDemoProps>;

const Template: Story<IntersectionObserverHookDemoProps> = (props) => (
  <IntersectionObserverHookDemo {...props} />
);

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [
  (Story) => (
    <Box sx={{ height: "200vh", width: "100%", position: "relative" }}>
      <Box sx={{ position: "absolute", top: "50%", left: "50%" }}>
        <Story />
      </Box>
    </Box>
  ),
];
