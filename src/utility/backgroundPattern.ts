import { CSSInterpolation } from "@mui/system";

export const backgroundPattern = (): CSSInterpolation => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F9FB",
    top: 0,
    left: 0,
    opacity: 0.05,
    zIndex: -1,
    backgroundImage:
      "linear-gradient(#002946 1.6px, transparent 1.6px), linear-gradient(90deg, #002946 1.6px, transparent 1.6px), linear-gradient(#002946 0.8px, transparent 0.8px), linear-gradient(90deg, #002946 0.8px, #F6F9FB 0.8px)",
    backgroundSize: "40px 40px, 40px 40px, 8px 8px, 8px 8px",
    backgroundPosition:
      "-1.6px -1.6px, -1.6px -1.6px, -0.8px -0.8px, -0.8px -0.8px",
  };
};
