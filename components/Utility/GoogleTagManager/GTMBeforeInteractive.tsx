import { GTMScriptInjectProps } from "./GTMAfterInteractive";

export const GTMBeforeInteractive = ({
  GTM_ID,
}: Pick<GTMScriptInjectProps, "GTM_ID">) => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );
};
