import { Line } from "@ant-design/charts";

function CustomLineChart() {
  const data = [
    { year: "1991", value: 8 },
    { year: "1992", value: 9 },
    { year: "1993", value: 9.1 },
    { year: "1994", value: 10 },
    { year: "1995", value: 12 },
    { year: "1996", value: 12.9 },
    { year: "1997", value: 12.9 },
  ];
  const config = {
    autoFit: false,

    height: 180,

    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
    padding: [0, 0, 0, 0],
    data,
    xField: "year",
    yField: "value",
    shapeField: "smooth",
    scale: {
      y: {
        domainMin: 0,
      },
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
    area: {
      style: {
        fill: "#2E364F",
      },
    },
  };
  return <Line {...config} />;
}

export default CustomLineChart;
