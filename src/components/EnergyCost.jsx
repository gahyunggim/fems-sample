import { Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

function EnergyCost({ showOption = true }) {
  const [value1, setValue1] = useState(1030108);
  const [value2, setValue2] = useState(729284);
  const [value3, setValue3] = useState(1273982);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setValue1((prev) => {
        return prev + 5;
      });
      setValue2((prev) => {
        return prev + 3;
      });
      setValue3((prev) => {
        return prev + 7;
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex vertical gap={12} className="!w-full">
      <EnergyCostCard title="Average Cost">
        <Flex gap={60}>
          <Flex vertical>
            <Flex gap={12}>
              <Typography.Text className="!text-xl !text-white !font-bold">
                <CountUp
                  start={value1 - 5}
                  end={value1}
                  separator=","
                  className="!text-lg text-white !font-bold"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                />
              </Typography.Text>
              <Typography.Text className="!text-xl !text-white !font-bold">
                KRW
              </Typography.Text>
            </Flex>
            <Flex justify="space-between">
              <Typography.Text className="!text-sm !text-[#A6A6B4]">
                Kw usage
              </Typography.Text>
              <Flex justify="space-between" gap={4}>
                <Typography.Text className="!text-sm !text-[#A6A6B4] !font-bold">
                  274,283
                </Typography.Text>
                <Typography.Text className="!text-sm !text-[#A6A6B4] !font-bold">
                  Kw
                </Typography.Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex vertical justify="space-between">
            <Flex gap={2} align="center">
              <IoIosTrendingDown size={24} color="#8ED2BA" />
              <Typography.Text className="!text-[#8ED2BA] !font-bold">
                {"(3.02%)"}
              </Typography.Text>
            </Flex>
            <Flex gap={4}>
              <Typography.Text className="!text-sm !text-[#A6A6B4] !font-bold">
                -237,193
              </Typography.Text>
              <Typography.Text className="!text-sm !text-[#A6A6B4] !font-bold">
                KRW
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      </EnergyCostCard>
      {showOption && (
        <Flex gap={20}>
          <EnergyCostCard title="Average Cost">
            <Flex gap={12}>
              <Typography.Text className="!text-xl !text-white !font-bold">
                <CountUp
                  start={value2 - 3}
                  end={value2}
                  separator=","
                  className="!text-lg text-white !font-bold"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                />
              </Typography.Text>
              <Typography.Text className="!text-xl !text-white !font-bold">
                KRW
              </Typography.Text>
            </Flex>
          </EnergyCostCard>
          <EnergyCostCard title="Average Cost">
            <Flex gap={12}>
              <Typography.Text className="!text-xl !text-white !font-bold">
                <CountUp
                  start={value3 - 7}
                  end={value3}
                  separator=","
                  className="!text-lg text-white !font-bold"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                />
              </Typography.Text>
              <Typography.Text className="!text-xl !text-white !font-bold">
                KRW
              </Typography.Text>
            </Flex>
          </EnergyCostCard>
        </Flex>
      )}
    </Flex>
  );
}

function EnergyCostCard({ title, children }) {
  return (
    <Flex vertical gap={2} justify="center" className="w-full">
      <Typography.Text className="!pl-2 !text-base !text-[#5F5F69]">
        {title}
      </Typography.Text>
      <Flex className="bg-[#2E3650] !py-4 !px-2 rounded-lg" justify="center">
        {children}
      </Flex>
    </Flex>
  );
}

export default EnergyCost;
