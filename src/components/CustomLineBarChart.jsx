import { DualAxes } from "@ant-design/charts";
import { useEffect, useState } from "react";

function CustomLineBarChart() {
  const data = [
    { time: "10:10", call: 4, waiting: 7, people: 4 },
    { time: "10:15", call: 2, waiting: 6, people: 7 },
    { time: "10:20", call: 4, waiting: 4, people: 4 },
    { time: "10:25", call: 9, waiting: 9, people: 3 },
    { time: "10:30", call: 5, waiting: 4, people: 7 },
    { time: "10:35", call: 8, waiting: 7, people: 4 },
    { time: "10:40", call: 5, waiting: 4, people: 7 },
  ];

  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChartData((prevData) => {
        const lastTime = prevData[prevData.length - 1].time;
        const [hour, minute] = lastTime.split(":").map(Number);

        // 5분 단위 시간 증가
        const newMinute = minute + 5;
        const newHour = hour + Math.floor(newMinute / 60);
        const formattedTime = `${String(newHour % 24).padStart(
          2,
          "0"
        )}:${String(newMinute % 60).padStart(2, "0")}`;

        const newItem = {
          time: formattedTime,
          call: Math.floor(Math.random() * 5) + 3, // 3~8
          waiting: Math.floor(Math.random() * 5) + 3, // 3~8
          people: Math.floor(Math.random() * 5) + 3, // 3~8
        };

        return [...prevData, newItem];
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const config = {
    xField: "time",

    legend: false,
    scale: { y: { domainMax: 10 } },
    children: [
      {
        type: "interval",
        yField: "waiting",
        colorField: "#2E3650",
      },
      {
        type: "line",
        yField: "people",
        shapeField: "smooth",
        colorField: "#00BC7F",
        axis: { y: { position: "right" } },
        style: { lineWidth: 2 },
      },
      {
        type: "line",
        yField: "call",
        shapeField: "smooth",
        colorField: "#FFA1AE",
        axis: { y: { position: "right" } },
        style: { lineWidth: 2 },
      },
    ],
  };
  return <DualAxes data={chartData} {...config} />;
}

export default CustomLineBarChart;
