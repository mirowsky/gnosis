import React from "react";

export function useChildrenBoundingBox<TNode extends HTMLElement>() {
  const ref = React.useRef<TNode>(null);

  const [childNodes, setChildNodes] = React.useState<Element[]>(
    Array.from(ref.current?.children ?? [])
  );
  const [widths, setWidths] = React.useState<number[]>([]);
  const [heights, setHeights] = React.useState<number[]>([]);
  const [totalHeight, setTotalHeight] = React.useState<number>();
  const [totalWidth, setTotalWidth] = React.useState<number>();

  React.useLayoutEffect(() => {
    setChildNodes(Array.from(ref.current?.children ?? []));
  }, []);

  React.useEffect(() => {
    if (childNodes.length > 0) {
      const childHeights = childNodes.map(
        (element, index) => element.clientHeight
      );

      const childWidths = childNodes.map(
        (element, index) => element.clientWidth
      );

      setWidths(childWidths);
      setHeights(childHeights);

      setTotalHeight(
        Array.from(childHeights).reduce(
          (prev, current, index) => prev + current
        )
      );

      setTotalWidth(
        Array.from(childWidths).reduce((prev, current, index) => prev + current)
      );
    }
  }, [childNodes]);

  return {
    totalWidth: totalWidth,
    totalHeight: totalHeight,
    heightList: heights,
    widthsList: widths,
  };
}
