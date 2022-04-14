import { Meta, Story } from "@storybook/react";
import { useChildrenBoundingBox } from "./useChildrenBoundingBox";

type TestComponentProps = {};

const TestComponent = (props: TestComponentProps) => {
  const Item = () => (
    <div style={{ width: "100px", height: "100px" }}>Hello</div>
  );
  const { ref, ...rest } = useChildrenBoundingBox<HTMLDivElement>();

  console.log(rest);

  return (
    <div
      ref={ref}
      data-testid="container"
      style={{
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Array.from(Array(10).keys()).map((_val, index) => {
        return <Item key={index} />;
      })}
    </div>
  );
};

export default {
  component: TestComponent,
  title: "Hooks/useChildrenBoundingBox",
} as Meta<TestComponentProps>;

const Template: Story<TestComponentProps> = (props) => (
  <TestComponent {...props} />
);

export const Primary = Template.bind({});
