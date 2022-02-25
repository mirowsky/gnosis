import { Global } from "@emotion/react";
import { Theme } from "@mui/material";

const GlobalStyles = ({ theme }: { theme: Theme }) => {
  return (
    <Global
      styles={`



      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

      body  {
        width: 100vw;
        overflow-x: hidden;
      }
  `}
    />
  );
};

export default GlobalStyles;
