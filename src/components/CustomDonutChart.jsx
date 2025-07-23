import { Pie } from "@ant-design/charts";

function CustomDonutChart({ data, type, title }) {
  const config = {
    data: data || [
      { type: "green", value: 40 },
      { type: "orange", value: 40 },
      { type: "red", value: 20 },
    ],
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
    marginLeft: 0,
    paddingLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    annotations: [
      {
        type: "text",
        style: {
          text: title,
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 16,
          fontStyle: "bold",
          fill: "#fff",
        },
      },
    ],

    width: 140,
    height: 90,
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6,
    label: null,
    legend: null,
    scale: {
      color: {
        range:
          type === "success"
            ? ["#51B09B", "#2E364F"]
            : ["#93BEB0", "#F3C076", "#C67B7A"],
      },
    },
  };
  return <Pie {...config} />;
}

export default CustomDonutChart;
