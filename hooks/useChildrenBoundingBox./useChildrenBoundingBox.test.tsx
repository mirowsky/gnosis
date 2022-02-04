import { render } from "@testing-library/react";
import { useChildrenBoundingBox } from "./useChildrenBoundingBox";
import React from "react";

let HOOK_STATE = {};

beforeEach(() => (HOOK_STATE = {}));

const setup = (amount: number = 10, direction: "column" | "row" = "column") => {
  const Item = () => (
    <div style={{ width: "100px", height: "100px" }}>hello</div>
  );

  const ItemContainer = () => {
    const { ref, ...rest } = useChildrenBoundingBox<HTMLDivElement>();

    React.useEffect(() => {
      HOOK_STATE = rest;
    }, [rest]);

    return (
      <div
        ref={ref}
        data-testid="container"
        style={{
          width: "auto",
          height: "auto",
          display: "flex",
          flexDirection: direction,
        }}
      >
        {Array.from(Array(amount).keys()).map((_val, index) => {
          return <Item key={index} />;
        })}
      </div>
    );
  };

  const result = render(<ItemContainer />);

  return result;
};

describe("useChildrenBoundingBox custom hook", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });

  it("should have the appropriate ammount of child nodes", () => {
    const { getByTestId } = setup(15);

    expect(getByTestId("container").childElementCount).toBe(15);
  });

  it("should have the correct height and width for each component", () => {});
});
