import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  DialogProps,
  TextFieldProps,
} from "@mui/material";
import NumberFormat from "react-number-format";

/* eslint-disable-next-line */
export interface ContactFormDialogProps {
  title?: string;
  subtitle?: string;
  cancelLabel?: string;
  submitLabel?: string;
  onSubmit?: (...args: unknown[]) => void;
  handleClose?: (...args: unknown[]) => void;
  open?: boolean;
  nameInputProps?: TextFieldProps;
  phoneInputProps?: TextFieldProps;
  emailInputProps?: TextFieldProps;
  messageInputProps?: TextFieldProps;
  DialogProps?: DialogProps;
}

export function ContactFormDialog({
  title = "Placeholder title",
  subtitle = "Lorem ipsum dolum salet, please fill out this fields this is placeholder text to give context about this forms purpose to the end user.",
  cancelLabel = "Cancel",
  submitLabel = "Send",
  onSubmit,
  handleClose,
  open = false,
  emailInputProps = {
    label: "Email",
    placeholder: "Ex. joao.vitor@gmail.com",
  },
  messageInputProps = {
    label: "Mensagem",
    placeholder: "Ex: Tenho dúvidas a respeito de...",
  },
  nameInputProps = {
    label: "Nome completo",
    placeholder: "Ex. João Vitor",
  },
  phoneInputProps = {
    label: "Número",
    placeholder: "Ex: (00) 0-0000-0000",
  },
  DialogProps,
}: ContactFormDialogProps) {
  return (
    <Dialog
      sx={{
        ".MuiDialog-paper": {
          minWidth: "50%",
        },
      }}
      maxWidth={"xl"}
      open={open}
      onClose={handleClose}
      {...DialogProps}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ pb: "2rem" }}>{subtitle}</DialogContentText>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gridTemplateRows: "1fr",
            gridAutoFlow: "row",
            gap: "3rem",
          }}
        >
          <TextField
            sx={{ gridColumn: { xs: "1/3", md: "initial" } }}
            autoFocus
            margin="dense"
            fullWidth
            variant="outlined"
            {...nameInputProps}
          />
          <TextField
            sx={{ gridColumn: { xs: "1/3", md: "initial" } }}
            margin="dense"
            type="email"
            fullWidth
            variant="outlined"
            {...emailInputProps}
          />
          <NumberFormat
            customInput={TextField}
            format="(##) #-####-####"
            sx={{ gridColumn: "1/3" }}
            margin="dense"
            fullWidth
            variant="outlined"
            {...(phoneInputProps as unknown)}
          />
          <TextField
            sx={{ gridColumn: "1/3" }}
            margin="dense"
            fullWidth
            variant="outlined"
            multiline
            rows={6}
            {...messageInputProps}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{cancelLabel}</Button>
        <Button onClick={onSubmit}>{submitLabel}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContactFormDialog;
