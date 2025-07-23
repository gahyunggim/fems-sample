import { Gauge } from "@ant-design/charts";

function CustomGaugeChart() {
  const config = {
    autoFit: false,

    width: 140,
    height: 120,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
    data: {
      target: 450,
      total: 500,
      name: "score",
      thresholds: [100, 200, 300, 400, 500],
    },
    scale: {
      color: {
        range: ["#53A98A", "#9BC7B7", "#F5E98F", "#FFC974", "#CF807D"],
      },
    },
    style: {
      textContent: () => `CAUTION 97%`,
      textColor: "red",
      pointerStroke: "#FFFFFF",
      pinStroke: "#B2B3B5",
      pinFill: "#A6A9B2",
      pinlinewidth: 4,
      textX: "50%",
      textY: "75%",
      textFill: "#FF0B2F",
      textFontSize: 16,
    },

    innerRadius: 0.55, // 0 ~ 1 (작을수록 굵어짐)
  };
  return <Gauge {...config} />;
}

export default CustomGaugeChart;
