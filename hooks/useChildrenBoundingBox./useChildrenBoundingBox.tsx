import React from "react";

export function useChildrenBoundingBox<TNode extends HTMLElement>() {
  const ref = React.useRef<TNode>(null);

  const [widths, setWidths] = React.useState<number[]>([]);
  const [heights, setHeights] = React.useState<number[]>([]);
  const [totalHeight, setTotalHeight] = React.useState<number>(0);
  const [totalWidth, setTotalWidth] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    if (ref.current && ref.current.children.length > 0) {
      const nodes = ref.current.children;

      setHeights([...nodes].map((node, _i) => node.clientHeight));
      setWidths([...nodes].map((node, _i) => node.clientWidth));
    }
  }, []);

  React.useEffect(() => {
    if (widths.length > 0) {
      setTotalWidth(widths.reduce((prev, current, _i) => prev + current));
    }
  }, [widths]);

  React.useEffect(() => {
    if (heights.length > 0) {
      setTotalHeight(heights.reduce((prev, current, _i, []) => prev + current));
    }
  }, [heights]);
  return {
    ref: ref,
    totalWidth: totalWidth,
    totalHeight: totalHeight,
    heightList: heights,
    widthsList: widths,
  };
}
