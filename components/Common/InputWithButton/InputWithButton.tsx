import { Box, Fab, TextField, TextFieldProps } from "@mui/material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { KeyboardArrowRight } from "@mui/icons-material";

export type InputWithButtonProps = {
  ButtonProps: LoadingButtonProps;
  TextFieldProps: TextFieldProps;
};

const InputWithButton = ({
  ButtonProps,
  TextFieldProps,
}: InputWithButtonProps) => {
  return (
    <Box sx={styles.root}>
      <Box
        component="input"
        role="textbox"
        type="text"
        placeholder="Enter Your Email"
        sx={styles.input}
      />
      <Fab role="button" sx={styles.button} color="primary">
        <KeyboardArrowRight />
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
    transition: "0.3s linear",
    boxShadow: (theme) => `0px 0px 3px ${theme.palette.special.main}`,

    "&:hover": {
      boxShadow: (theme) => `0px 0px 8px ${theme.palette.special.main}`,
    },
  },
  input: {
    width: "100%",
    height: "70px",
    borderRadius: "40px",
    border: 0,
    background: "none",
    padding: "0 30px",
    outline: "none",
    fontSize: "15px",
    paddingRight: { sm: "80px" },
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
    transition: "0.3s linear",

    "&:hover": {
      opacity: "0.5s",
    },

    "> svg": {
      fontSize: "2rem",
    },
  },
});
