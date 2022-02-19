import React from "react";

export const useWhatsAppRedirect = (
  message: string,
  phoneNumber: string,
  device: "mobile" | "desktop"
) => {
  const redirectToWhatsApp = React.useCallback(() => {
    device === "mobile"
      ? window.open(
          `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
            message
          )}`,
          "_blank"
        )
      : window.open(
          `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
            message
          )}&lang=pt_br`,
          "_blank"
        );
  }, [device, message, phoneNumber]);

  return redirectToWhatsApp;
};
