import { useScrollTrigger, Slide } from "@mui/material";

/* eslint-disable-next-line */
export interface HideOnScrollProps {
  children?: JSX.Element;
}

export function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide
      timeout={{ enter: 250, exit: 250 }}
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children || <div></div>}
    </Slide>
  );
}

export default HideOnScroll;
