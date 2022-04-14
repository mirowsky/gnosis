const breakpointKeys = ["xs", "sm", "md", "lg", "xl"] as const;

export type BreakpointKeys = typeof breakpointKeys[number];

export type CoreBreakpoints = { [Key in BreakpointKeys]: number };

const breakpoints: CoreBreakpoints = {
  xs: 320,
  sm: 640,
  md: 1024,
  lg: 1170,
  xl: 1400,
};
export default breakpoints;
