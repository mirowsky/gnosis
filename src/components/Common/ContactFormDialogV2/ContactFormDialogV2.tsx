import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import {
  Box,
  Button,
  ButtonProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { Backdrop, BackdropProps } from "src/components/Utility";
import stylesheet from "src/theme/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";

export type ContactFormDialogV2Props = {
  title?: string;
  subtitle?: string;
  BackdropProps?: BackdropProps;
  NameInputProps?: TextFieldProps;
  EmailInputProps?: TextFieldProps;
  PhoneInputProps?: NumberFormatProps & TextFieldProps;
  MessageInputProps?: TextFieldProps;
  PrimaryActionProps?: LoadingButtonProps;
  SecondaryActionProps?: ButtonProps;
  sx?: ThemeStyles;
};

export const ContactFormDialogV2 = ({
  BackdropProps,
  EmailInputProps,
  MessageInputProps,
  NameInputProps,
  PhoneInputProps,
  PrimaryActionProps,
  SecondaryActionProps,
  sx,
  title,
  subtitle,
}: ContactFormDialogV2Props) => {
  return (
    <Backdrop
      {...BackdropProps}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ ...styles.root, ...sx }}>
        <Box sx={styles.textContainer}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="grey.700">
            {subtitle}
          </Typography>
        </Box>

        <TextField {...NameInputProps} fullWidth sx={styles.nameInputBox} />
        <NumberFormat
          customInput={TextField}
          fullWidth
          format="(##) #-####-####"
          {...(PhoneInputProps as unknown)}
          sx={styles.phoneInputBox}
        />
        <TextField {...EmailInputProps} fullWidth sx={styles.emailInputBox} />
        <TextField
          {...MessageInputProps}
          fullWidth
          multiline
          rows={6}
          sx={styles.messageInputBox}
        />

        <Box sx={styles.actions}>
          <LoadingButton
            variant="outlined"
            color="primary"
            size="small"
            sx={styles.primaryAction}
            {...PrimaryActionProps}
          />
          <Button
            variant="text"
            size="small"
            color="primary"
            sx={styles.secondaryAction}
            {...SecondaryActionProps}
          />
        </Box>
      </Box>
    </Backdrop>
  );
};

export default ContactFormDialogV2;

const scale = {
  "& *": {
    fontSize: { xs: "0.75rem !important" },
  },
} as ThemeStyles;

const styles = stylesheet.create({
  actions: {
    display: "flex",
    gridColumn: { lg: "2/3" },
    gap: "1rem",
    justifySelf: "flex-end",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    gridColumn: { lg: "1/3" },
  },

  primaryAction: {
    fontSize: { xs: "0.6rem" },
  },
  secondaryAction: {
    fontSize: { xs: "0.6rem" },
  },

  root: {
    maxHeight: "95vh",
    overflow: "scroll",
    maxWidth: { xs: "95vw" },
    minWidth: { xs: "75vw", lg: "60vw", xl: "40vw" },
    px: 4,
    py: 3,
    pt: 4.5,
    height: "auto",
    borderRadius: "4px",
    backgroundColor: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadows[3],
    display: "grid",
    gridTemplateColumns: {
      lg: "repeat(2, minmax(0, 1fr))",
      xs: "repeat(1, minmax(0, 1fr))",
    },
    gap: (theme) => ({ xs: theme.spacing(4) }),
  },

  nameInputBox: {
    ...scale,
  },
  phoneInputBox: {
    ...scale,
  },
  emailInputBox: {
    ...scale,
    gridColumn: { lg: "1/3" },
  },
  messageInputBox: {
    ...scale,
    gridColumn: { lg: "1/3" },
  },
});
