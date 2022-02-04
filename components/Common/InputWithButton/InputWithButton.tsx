import { Box, Button, TextField, TextFieldProps } from "@mui/material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { INPUT_WITH_BUTTON_TEST_ID } from "./constants";

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
      <TextField
        data-testid={INPUT_WITH_BUTTON_TEST_ID.INPUT}
        {...TextFieldProps}
        sx={styles.input}
        variant="outlined"
      />
      <LoadingButton
        {...ButtonProps}
        sx={styles.button}
        variant="contained"
        color="primary"
      />
    </Box>
  );
};

export default InputWithButton;

const styles = stylesheet.create({
  root: {
    overflow: "hidden",
  },
  input: {},
  button: {},
});
