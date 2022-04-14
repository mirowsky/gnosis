
/**
 *
 * @param phoneNumber - Phone number user will land into
 * @param message - Message will be URI encoded
 */

export function deviceAwareWppURL(
  phoneNumber: string,
  message: string,
  device: "mobile" | "desktop"
) {
  if (device === "mobile") {
    return `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}&lang=pt_br`;
  }
}

export function wppRedirect(
  phoneNumber: string,
  message: string,
  device: "mobile" | "desktop"
) {
  if (device === "mobile") {
    window.open(
      `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  } else {
    window.open(
      `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}&lang=pt_br`,
      "_blank"
    );
  }
}
