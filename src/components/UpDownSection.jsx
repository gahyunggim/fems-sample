import { Button, Flex, Typography } from "antd";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function UpDownSection({ type = "up", value = 38100 }) {
  const sampleUpData = [
    {
      company_nm: "Company A",
      value: 700,
      trend: (
        <Flex align="center" gap={2}>
          <IoIosTrendingUp color="#8ED2BA" />
          <Typography.Text className="!text-base !font-bold !text-[#8ED2BA]">
            {"(5.32%)"}
          </Typography.Text>
        </Flex>
      ),
      type: "OB",
      rmrk: "22mm Bolt",
    },
    {
      company_nm: "Company B",
      value: 1300,
      trend: (
        <Flex align="center" gap={2}>
          <IoIosTrendingUp color="#8ED2BA" />
          <Typography.Text className="!text-base !font-bold !text-[#8ED2BA]">
            {"(1.02%)"}
          </Typography.Text>
        </Flex>
      ),
      type: "OB",
      rmrk: "22mm Bolt",
    },
    {
      company_nm: "Company B",
      value: 1100,
      trend: (
        <Flex align="center" gap={2}>
          <IoIosTrendingUp color="#8ED2BA" />
          <Typography.Text className="!text-base !font-bold !text-[#8ED2BA]">
            {"(3.21%)"}
          </Typography.Text>
        </Flex>
      ),
      type: "OB",
      rmrk: "22mm Bolt",
    },
    {
      company_nm: "Company C",
      value: 500,
      trend: (
        <Flex align="center" gap={2}>
          <IoIosTrendingUp color="#8ED2BA" />
          <Typography.Text className="!text-base !font-bold !text-[#8ED2BA]">
            {"(4.14%)"}
          </Typography.Text>
        </Flex>
      ),
      type: "OB",
      rmrk: "22mm Bolt",
    },
  ];

  const sampleDownData = [
    {
      company_nm: "Company B",
      value: 454,
      trend: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-base !font-bold !text-[#E2A6A5]">
            {"(0.02%)"}
          </Typography.Text>
        </Flex>
      ),
      type: "OB",
      rmrk: "22mm Bolt",
    },
    {
      company_nm: "Company A",
      value: 338,
      trend: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-base !font-bold !text-[#E2A6A5]">
            {"(1.29%)"}
          </Typography.Text>
        </Flex>
      ),
      type: "OB",
      rmrk: "22mm Bolt",
    },
    {
      company_nm: "Company C",
      value: 539,
      trend: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-base !font-bold !text-[#E2A6A5]">
            {"(0.23%)"}
          </Typography.Text>
        </Flex>
      ),
      type: "OB",
      rmrk: "22mm Bolt",
    },
    {
      company_nm: "Company C",
      value: 428,
      trend: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-base !font-bold !text-[#E2A6A5]">
            {"(2.15%)"}
          </Typography.Text>
        </Flex>
      ),
      type: "OB",
      rmrk: "22mm Bolt",
    },
  ];

  const [upData, setUpData] = useState(sampleUpData);
  const [downData, setDownData] = useState(sampleDownData);

  const [sampleValue, setSampleValue] = useState(value);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setUpData((prev) => {
        const sliced = prev.slice(0, 3);

        const companies = ["Company A", "Company B", "Company C"];
        const randomCompany =
          companies[Math.floor(Math.random() * companies.length)];

        const randomPercent = (Math.random() * 3 + 1).toFixed(2); // 1.00 ~ 4.00
        const displayText = `(${randomPercent}%)`;

        sliced.unshift({
          company_nm: randomCompany,
          value: Math.floor(Math.random() * 1000) + 500,
          trend: (
            <Flex align="center" gap={2}>
              <IoIosTrendingUp color="#8ED2BA" />
              <Typography.Text className="!text-base !font-bold !text-[#8ED2BA]">
                {displayText}
              </Typography.Text>
            </Flex>
          ),
          type: "OB",
          rmrk: "22mm Bolt",
        });

        return sliced;
      });
      setDownData((prev) => {
        const sliced = prev.slice(0, 3);

        const companies = ["Company A", "Company B", "Company C"];
        const randomCompany =
          companies[Math.floor(Math.random() * companies.length)];

        const randomPercent = (Math.random() * 3 + 1).toFixed(2); // 1.00 ~ 4.00
        const displayText = `(${randomPercent}%)`;

        sliced.unshift({
          company_nm: randomCompany,
          value: Math.floor(Math.random() * 1000) + 500,
          trend: (
            <Flex align="center" gap={2}>
              <IoIosTrendingDown color="#E2A6A5" />
              <Typography.Text className="!text-base !font-bold !text-[#E2A6A5]">
                {displayText}
              </Typography.Text>
            </Flex>
          ),
          type: "OB",
          rmrk: "22mm Bolt",
        });
        return sliced;
      });

      setSampleValue((prev) => prev + Math.floor(Math.random() * 1000) + 500);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const targetData = type === "up" ? upData : downData;

  return (
    <Flex vertical flex={1}>
      <Flex gap={8} align="center" justify="space-between">
        <Flex gap={8}>
          <Typography.Text className="!text-2xl !font-bold">
            <CountUp
              start={sampleValue - 5}
              end={sampleValue}
              separator=","
              className="!text-xl text-white !font-bold"
            />
          </Typography.Text>
          <Flex align="center" gap={4}>
            {type === "up" ? (
              <IoIosTrendingUp color="#8ED2BA" />
            ) : (
              <IoIosTrendingDown color="#E2A6A5" />
            )}
            <Typography.Text
              className={`!text-base !font-bold !text-[${
                type === "up" ? "#8ED2BA" : "#E2A6A5"
              }]`}
            >
              {"(5.56%)"}
            </Typography.Text>
          </Flex>
        </Flex>
        <Button type="text" className="!px-0">
          <Flex align="center" gap={4}>
            <Typography.Text className="!text-[#4E4E57] !font-bold">
              View all
            </Typography.Text>
            <FaChevronRight color={"#4E4E57"} />
          </Flex>
        </Button>
      </Flex>
      <Typography.Text>July 1st, 2025</Typography.Text>
      <Flex vertical className="!mt-3 !mb-3">
        {targetData.map((item, index) => (
          <Flex key={index} align="center" justify="space-between" gap={12}>
            <Typography.Text className="!text-xs !font-bold">
              {item.company_nm}
            </Typography.Text>
            <Flex align="center" gap={4}>
              <Typography.Text className="!text-xs !font-bold">
                {item.value.toLocaleString()}
              </Typography.Text>
              {item.trend}
            </Flex>
            <Typography.Text className="!text-xs !font-bold">
              {item.type}
            </Typography.Text>
            <Typography.Text className="!text-xs !font-bold">
              {item.rmrk}
            </Typography.Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
export default UpDownSection;
