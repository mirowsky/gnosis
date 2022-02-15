import { useScrollTrigger, Slide } from "@mui/material";

export interface HideOnScrollProps {
  children: JSX.Element;
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
      {children}
    </Slide>
  );
}

export default HideOnScroll;
