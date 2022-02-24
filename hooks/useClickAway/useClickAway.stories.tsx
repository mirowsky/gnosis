import { Meta, Story } from "@storybook/react";
import { Box } from "@mui/material";
import { useClickAway } from "./useClickAway";

type UseClickAwayDemoProps = {};

const UseClickAwayDemo = (props: UseClickAwayDemoProps) => {
  const { ref } = useClickAway((event) => {
    console.log("Something else was clicked inside the component tree");
  });

  return (
    <Box
      ref={ref}
      component="div"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "250px",
        width: "250px",
        bgcolor: "violet",
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          width: "50px",
          height: "50px",
          bgcolor: "azure",
          borderRadius: "12px",
        }}
      ></Box>
    </Box>
  );
};

export default {
  title: "Hooks/useClickAway",
  component: UseClickAwayDemo,
} as Meta<UseClickAwayDemoProps>;

const Template: Story<UseClickAwayDemoProps> = (props) => (
  <UseClickAwayDemo {...props} />
);

export const Primary = Template.bind({});

Primary.args = {};
