import { Box, CircularProgress, Fab, FabProps } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React, { InputHTMLAttributes } from "react";
import { KeyboardArrowRight } from "@mui/icons-material";
import { ResponsiveStyleValue } from "../../../theme/createResponsiveProperty";
import { Properties } from "csstype";

export type InputWithButtonProps = {
  ButtonProps?: FabProps & { loading?: boolean };
  InputProps?: InputHTMLAttributes<HTMLInputElement>;
  fontSize?: ResponsiveStyleValue<Properties["fontSize"]>;
};

export const InputWithButton = ({
  ButtonProps = { loading: false },
  InputProps,
  fontSize = { xs: "1rem" },
}: InputWithButtonProps) => {
  const styles = React.useMemo(() => _styles(fontSize), [fontSize]);

  return (
    <Box sx={styles.root}>
      <Box
        component="input"
        role="textbox"
        type="text"
        placeholder="Enter Your Email"
        sx={styles.input}
        {...InputProps}
      />
      <Fab
        disabled={ButtonProps.loading}
        role="button"
        sx={styles.button}
        color="primary"
        aria-label="Clique para cadastar seu email em nossa newsletter"
        {...ButtonProps}
      >
        {(ButtonProps.loading && <CircularProgress sx={styles.spinner} />) || (
          <KeyboardArrowRight />
        )}
      </Fab>
    </Box>
  );
};

export default InputWithButton;

const _styles = (fontSize: ResponsiveStyleValue<Properties["fontSize"]>) =>
  stylesheet.create({
    root: {
      width: "100%",
      height: "4.375em",
      backgroundColor: "#fff",
      borderRadius: "40px",
      position: "relative",
      fontSize: fontSize,
      transition: "0.3s linear",

      boxShadow: (theme) => `0px 0px 0px 1px ${theme.palette.grey[400]}`,

      "&:hover, :active, :focus, :focus-within": {
        boxShadow: (theme) => `0px 0px 5px 1px ${theme.palette.primary.light}`,
      },
    },
    input: {
      width: "100%",
      height: "100%",
      borderRadius: "40px",
      background: "none",
      padding: "0 1.875em",
      outline: "none",
      fontSize: "0.9375em",
      border: 0,
      paddingRight: { sm: "5em" },
    },
    button: {
      fontSize: "inherit",
      border: 0,
      width: "3.125em",
      height: "3.125em",
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "5%",
      outline: "none",
      cursor: "pointer",
      color: "#fff",
      boxShadow: 0,
      minHeight: 0,
      transition: "0.3s linear",

      "&:hover": {
        opacity: "0.5s",
      },

      "> svg": {
        fontSize: "2em",
      },
    },

    spinner: {
      fontSize: "inherit",
      color: (theme) => theme.palette.grey[700],
      height: "1.5625em !important",
      width: "1.5625em !important",
    },
  });
