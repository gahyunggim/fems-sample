import { RadialBar } from "@ant-design/charts";

const data = [{ name: "X6", star: 0.2 }];

function CustomRadialBarChart() {
  const config = {
    data,
    xField: "name",
    yField: "star",
    radius: 1,
    innerRadius: 0.8,

    tooltip: {
      items: ["star"],
    },
  };

  return <RadialBar {...config} />;
}

export default CustomRadialBarChart;
