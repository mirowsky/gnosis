import { Box, CircularProgress, Fab, FabProps } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React, { InputHTMLAttributes } from "react";
import { KeyboardArrowRight } from "@mui/icons-material";

export type InputWithButtonProps = {
  ButtonProps: FabProps & { loading?: boolean };
  InputProps: InputHTMLAttributes<HTMLInputElement>;
};

const InputWithButton = ({ ButtonProps, InputProps }: InputWithButtonProps) => {
  return (
    <Box sx={styles.root}>
      <Box
        component="input"
        role="textbox"
        type="text"
        placeholder="Enter Your Email"
        sx={styles.input}
      />
      <Fab
        disabled={ButtonProps.loading}
        role="button"
        sx={styles.button}
        color="primary"
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

const styles = stylesheet.create({
  root: {
    width: "100%",
    height: "70px",
    // backgroundColor: "#f1f1f199",
    borderRadius: "40px",
    position: "relative",
    marginTop: "40px",
  },
  input: {
    width: "100%",
    height: "70px",
    borderRadius: "40px",
    background: "none",
    padding: "0 30px",
    boxShadow: (theme) => `0px 0px 0px 1px ${theme.palette.grey[400]}`,
    outline: "none",
    fontSize: "15px",
    border: 0,
    paddingRight: { sm: "80px" },
    transition: "0.3s linear",

    "&:hover, :active, :focus": {
      boxShadow: (theme) => `0px 0px 0px 1.5px ${theme.palette.primary.main}`,
    },
  },
  button: {
    border: 0,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    position: "absolute",
    right: "10px",
    top: "10px",
    outline: "none",
    cursor: "pointer",
    color: "#fff",
    boxShadow: 0,
    transition: "0.3s linear",

    "&:hover": {
      opacity: "0.5s",
    },

    "> svg": {
      fontSize: "2rem",
    },
  },

  spinner: {
    color: (theme) => theme.palette.grey[700],

    height: "25px !important",
    width: "25px !important",
  },
});
