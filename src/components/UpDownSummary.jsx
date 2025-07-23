import { Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function UpDownSummary({ labelName, value, rmrk }) {
  const [displayedValue, setDisplayedValue] = useState(value);
  const [targetValue, setTargetValue] = useState(
    () => Math.floor(Math.random() * 601) + 600
  ); // 600~1200

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedValue((prev) => {
        return prev + targetValue;
      });
    }, 5000);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 정리
  }, [targetValue]);

  return (
    <Flex align="center" justify="flex-start" gap={12}>
      <Typography.Text className="!text-xs !font-bold">
        {labelName}
      </Typography.Text>
      <Flex align="center" gap={8}>
        <Typography.Text className="!text-xs !font-bold">
          <CountUp
            start={displayedValue - targetValue}
            end={displayedValue}
            separator=","
            className="!text-xl text-white !font-bold"
          />
        </Typography.Text>
        {rmrk}
      </Flex>
    </Flex>
  );
}

export default UpDownSummary;
