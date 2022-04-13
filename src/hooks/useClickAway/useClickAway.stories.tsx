import { Meta, Story } from "@storybook/react";
import { Box } from "@mui/material";
import { useClickAway } from "./useClickAway";
import React from "react";

type UseClickAwayDemoProps = {};

const UseClickAwayDemo = (props: UseClickAwayDemoProps) => {
  const { ref } = useClickAway((event) => {
    setOutside(true);

    setTimeout(() => {
      setOutside(false);
    }, 1750);
  });

  const [outside, setOutside] = React.useState(false);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            fontSize: "2rem",
            fontWeight: 800,
            color: outside ? "red" : "#333",
          }}
        >
          {outside
            ? "You clicked outside the component"
            : "There was no click outside the component recently"}
        </Box>

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
      </Box>
    </React.Fragment>
  );
};

export default {
  title: "Hooks/useClickAway",
  component: UseClickAwayDemo,
  parameters: {
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<UseClickAwayDemoProps>;

const Template: Story<UseClickAwayDemoProps> = (props) => (
  <UseClickAwayDemo {...props} />
);

export const Primary = Template.bind({});

Primary.args = {};
