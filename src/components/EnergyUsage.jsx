import { Flex, Statistic, Typography } from "antd";
import CountUp from "react-countup";

import CustomGaugeChart from "@components/CustomGaugeChart";
import CustomHorizontalBarChart from "@components/CustomHorizontalBarChart";
import { useEffect, useState } from "react";

function EnergyUsage() {
  return (
    <Flex vertical justify="space-between" flex={1}>
      <Flex align="center">
        <Flex vertical>
          <CustomGaugeChart />
        </Flex>
        <Flex vertical flex={1} gap={2}>
          <EnergyUsageStat
            title="Daily Usage"
            defaultValue={3206}
            unit="KW/h"
          />
          <EnergyUsageStat
            title="Monthly Usage"
            defaultValue={190305}
            unit="KW/h"
          />
        </Flex>
      </Flex>
      <Flex flex={1} align="center">
        <CustomHorizontalBarChart />
      </Flex>
    </Flex>
  );
}

function EnergyUsageStat({ title, defaultValue, unit }) {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentValue((prev) => {
        return prev + 5;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex vertical gap={1}>
      <Typography.Text className="!text-[#5F5F69] !font-bold">
        {title}
      </Typography.Text>
      <Flex
        justify="space-between"
        gap={4}
        className="bg-[#2E3650] rounded-lg !px-2 !py-1"
      >
        <Typography.Text className="!text-lg text-white !font-bold">
          <CountUp
            start={currentValue - 5}
            end={currentValue}
            separator=","
            className="!text-lg text-white !font-bold"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
        </Typography.Text>

        <Typography.Text className="!text-lg text-white !font-bold">
          {unit}
        </Typography.Text>
      </Flex>
    </Flex>
  );
}

export default EnergyUsage;
