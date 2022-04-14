import React, { useRef } from "react";
import { createPortal } from "react-dom";

export type ClientPortalProps = {
  children?: React.ReactNode;
  selector?: string;
};

export const ClientPortal = ({
  selector = "body",
  children,
}: ClientPortalProps) => {
  const ref = useRef<Element>();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    ref.current = document.querySelector(selector)!;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
};

export default ClientPortal;
