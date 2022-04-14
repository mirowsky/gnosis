import type { BackdropProps } from "./Backdrop";
import Backdrop from "./Backdrop";
import { DEFAULT_Backdrop_TESTING_PROPS } from "./Backdrop.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Utility Components/Backdrop/Main",
  component: Backdrop,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<BackdropProps>;

const Template: Story<BackdropProps> = (props) => <Backdrop {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_Backdrop_TESTING_PROPS,
};

Primary.decorators = [
  (Story) => (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          fontSize: "1.5rem",
          color: "#333",
          fontWeight: 900,
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        recusandae ex, voluptas excepturi cum expedita earum. Reiciendis, illum
        optio obcaecati cumque ab sequi veritatis eius temporibus, eligendi
        nihil omnis? Aspernatur similique cum non, harum provident nemo beatae
        rem deserunt quaerat id ex voluptatibus vero ad, sed optio ipsam odit et
        vel exercitationem? Animi, quos. Delectus, pariatur. Voluptatum
        cupiditate, nostrum rerum minus explicabo earum laboriosam eligendi.
        Perferendis inventore, animi ut deserunt, esse, facere nemo eligendi
        labore minima nulla voluptate sapiente? Vitae provident quo quibusdam
        atque ipsa, libero est. Placeat hic numquam autem doloremque sapiente
        omnis, recusandae quisquam fuga dicta officiis iure a explicabo? Sed nam
        eum quaerat quas! Optio, eius nemo. Cumque at tempore voluptate
        recusandae ipsum repellendus mollitia illum, culpa, quos, explicabo
        praesentium. Repellendus ad iste quasi beatae minima libero quaerat,
        asperiores voluptatibus excepturi possimus animi magni eligendi debitis
        ipsum totam! Ea dolor officiis possimus illum pariatur vel, velit minus
        nisi quam eius quidem repellendus maxime vitae voluptate. Dolorum,
        labore? At obcaecati mollitia unde et! Nisi iure, ex eligendi in
        perspiciatis harum, labore pariatur eaque quod eum maiores, veritatis
        eveniet blanditiis perferendis. Voluptate doloribus, hic deserunt vero
        quasi doloremque enim. Placeat fugiat iure ea, perferendis officiis
        rerum voluptatibus. Repellat, officia eum? Necessitatibus unde quis
        labore quos aperiam aliquam, a dolor dolores ipsam laborum blanditiis
        enim sapiente veniam vitae eius cumque cum ut perspiciatis officiis
        architecto? Eligendi sequi magnam excepturi debitis blanditiis expedita
        earum cupiditate, animi impedit? Voluptas mollitia aliquid illo
        similique delectus porro quia cum, impedit distinctio magni culpa dolor.
      </Box>
      <Story />
    </Box>
  ),
];
