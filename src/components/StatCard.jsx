import { ConfigProvider, Flex, Typography } from "antd";

import CircleIcon from "@components/CircleIcon";
import { use, useState } from "react";
import CountUp from "react-countup";

const VALUE_TEXT_CLASS_NAME = "!text-2xl !font-bold";

const ICON_SIZE = 56;

const STAT_COLOR_THEME = {
  "Production Target": {
    iconBg: "bg-indigo-300",
    cardBg: "bg-indigo-200",
    text: "#6661FC",
  },
  Orders: {
    iconBg: "bg-indigo-300",
    cardBg: "bg-indigo-200",
    text: "#6661FC",
  },
  "Energy Usage": {
    iconBg: "bg-emerald-300",
    cardBg: "bg-teal-100",
    text: "#34D399",
  },
  Revenue: {
    iconBg: "bg-emerald-300",
    cardBg: "bg-teal-100",
    text: "#34D399",
  },
  "Production Achieved": {
    iconBg: "bg-orange-200",
    cardBg: "bg-orange-50",
    text: "#FBBF24",
  },
  Processing: {
    iconBg: "bg-orange-200",
    cardBg: "bg-orange-50",
    text: "#FBBF24",
  },
  Waste: {
    iconBg: "bg-rose-300",
    cardBg: "bg-red-100",
    text: "#F87171",
  },
  "Average Fullfillment Time": {
    iconBg: "bg-rose-300",
    cardBg: "bg-red-100",
    text: "#F87171",
  },
};

function StatCard({ title, value, unit, addedValue = 5 }) {
  const [displayedValue, setDisplayedValue] = useState(value);

  useState(() => {
    const intervalId = setInterval(() => {
      setDisplayedValue((prev) => prev + addedValue);
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: STAT_COLOR_THEME[title]?.text,
          },
        },
      }}
    >
      <Flex
        gap={24}
        align="center"
        className={`${STAT_COLOR_THEME[title]?.cardBg} w-full h-full rounded-lg !px-4 !py-2`}
      >
        <CircleIcon title={title} />

        <Flex vertical gap={12} className="!py-2.5">
          <Typography.Text className="!text-[#A6A6B4] !font-bold !text-base">
            {title}
          </Typography.Text>
          <Flex gap={8}>
            <Typography.Text className={`${VALUE_TEXT_CLASS_NAME} `}>
              <CountUp
                start={displayedValue - addedValue}
                end={displayedValue}
                separator=","
                style={{ fontSize: "24px", fontWeight: "bold" }}
              />
            </Typography.Text>
            <Typography.Text className={`${VALUE_TEXT_CLASS_NAME}`}>
              {unit}
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}

export default StatCard;
