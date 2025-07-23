import { Bar } from "@ant-design/charts";
import { Flex, Typography } from "antd";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

const DATA = [
  {
    labelName: "Average",
    value: 2793,
  },
  {
    labelName: "Yesterday",
    value: 1883,
  },
  {
    labelName: "Today",
    value: 3206,
  },
];

function CustomHorizontalBarChart() {
  const config = {
    data: DATA,

    marginTop: 20,
    // marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    // paddingLeft: 0,

    height: 84,

    xField: "labelName",
    yField: "value",

    colorField: "labelName",

    style: {
      maxWidth: 16,
    },

    label: {
      text: null,

      render: (value, data) => {
        const { labelName } = data;

        const formattedValue = value.toLocaleString();

        if (labelName === "Average") {
          return (
            <Flex className="absolute w-200 -top-2.75">
              <Typography.Text className="!ml-4 !pt-[-5] !text-[#4E4E57] !font-bold">
                {formattedValue}
              </Typography.Text>
            </Flex>
          );
        }
        if (labelName === "Yesterday") {
          return (
            <Flex align="center" gap={4} className="absolute w-200 -top-2.75">
              <Typography.Text className="!ml-4 !p-0 !text-[#4E4E57] !font-bold">
                {formattedValue}
              </Typography.Text>
              <Flex gap={2} align="center">
                <IoIosTrendingDown size={24} color="#8ED2BA" />
                <Typography.Text className="!text-[#8ED2BA] !font-bold">
                  {"(3.02%)"}
                </Typography.Text>
              </Flex>
            </Flex>
          );
        }
        if (labelName === "Today") {
          return (
            <Flex align="center" gap={4} className="absolute w-200 -top-2.75">
              <Typography.Text className="!ml-4 !p-0 !text-[#4E4E57] !font-bold">
                {formattedValue}
              </Typography.Text>
              <Flex gap={2} align="center">
                <IoIosTrendingUp size={24} color="#E2A6A5" />
                <Typography.Text className="!text-[#E2A6A5] !font-bold">
                  {"(3.02%)"}
                </Typography.Text>
              </Flex>
            </Flex>
          );
        }
      },

      style: {
        fontSize: 0,
        textAlign: "start",
        height: 0,
        marginTop: 80,
        paddingTop: 80,
        dx: 12,
        dy: -12,
      },
    },

    markBackground: {
      label: [
        {
          text: ({ originData }) => originData.labelName, // ✅ 왼쪽에 라벨 표시
          position: "left",
          dx: -76,
          style: {
            fill: "#4E4E57",
            fontSize: 14,
            textAlign: "left",
            baseline: "middle",
            fontWeight: "bold",
          },
        },
      ],
      style: {
        fill: "transparent",
      },
    },
    scale: {
      y: {
        domain: [0, 8000],
      },
      color: {
        range: ["#53A98A", "#F5E98F", "#CF807D"],
      },
    },
  };

  return <Bar {...config} />;
}

export default CustomHorizontalBarChart;
