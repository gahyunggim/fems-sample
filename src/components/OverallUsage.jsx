import { Button, Divider, Flex, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const sampleData = [
  {
    title: "This year",
    usagePrice: 1030108,
    maxUsage: 1030108,
  },
  {
    title: "Last year",
    usagePrice: 1256238,
    maxUsage: 1598213,
  },
  {
    title: "2 year ago",
    usagePrice: 1598093,
    maxUsage: 1898231,
  },
];

function OverallUsage({ showButton = false }) {
  const [thisYearValue, setThisYearValue] = useState(1030108);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setThisYearValue((prev) => prev + 5);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Space
      direction="vertical"
      className="w-full"
      split={<Divider className="!border-[#A6A6B4]" />}
    >
      {sampleData.map((data, index) => (
        <Flex key={index} justify="space-between" align="center" flex={1}>
          <Typography.Text className="!text-[#A6A6B4]">
            {data.title}
          </Typography.Text>
          <Flex gap={12} align="center">
            <Flex gap={8} align="center">
              <Typography.Text className="!text-white !font-bold !text-xl">
                {index === 0 ? (
                  <CountUp
                    start={thisYearValue - 5}
                    end={thisYearValue}
                    separator=","
                    className="!text-xl text-white !font-bold"
                  />
                ) : (
                  data.usagePrice.toLocaleString()
                )}
              </Typography.Text>
              <Typography.Text className="!text-[#A6A6B4] !font-bold">
                KRW
              </Typography.Text>
            </Flex>
            <Typography.Text className="!text-[#A6A6B4] !font-bold">
              /
            </Typography.Text>
            <Flex gap={8} align="center">
              <Typography.Text className="!text-white !font-bold !text-xl">
                {index === 0 ? (
                  <CountUp
                    start={thisYearValue - 5}
                    end={thisYearValue}
                    separator=","
                    className="!text-xl text-white !font-bold"
                  />
                ) : (
                  data.maxUsage.toLocaleString()
                )}
              </Typography.Text>
              <Typography.Text className="!text-[#A6A6B4] !font-bold">
                Kw
              </Typography.Text>
            </Flex>
            {showButton && (
              <Button
                size="middle"
                className="!bg-[#2E364F] !border-none !text-white"
              >
                Manage
              </Button>
            )}
          </Flex>
        </Flex>
      ))}
    </Space>
  );
}

export default OverallUsage;
