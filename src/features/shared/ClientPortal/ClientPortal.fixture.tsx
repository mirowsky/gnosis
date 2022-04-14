import type { ClientPortalProps } from "./ClientPortal";

export const DEFAULT_ClientPortal_TESTING_PROPS: ClientPortalProps = {
  children: <div>I came through a portal</div>,
  selector: "#root",
};

export const ClientPortal_TEST_ID = {} as const;
