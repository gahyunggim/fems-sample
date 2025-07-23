import { Flex } from "antd";

import { FLEX_GAP } from "@constants/commonStyle";
import CustomCard from "@components/CustomCard";
import EnergyCost from "@components/EnergyCost";
import EnergyUsage from "@components/EnergyUsage";
import OverallUsage from "@components/OverallUsage";
import CustomHorizontalBarChart from "@components/CustomHorizontalBarChart";
import CustomLineBarChart from "@components/CustomLineBarChart";

function Production() {
  return (
    <Flex vertical gap={FLEX_GAP} className="h-full">
      <Flex flex={1} gap={FLEX_GAP}>
        <Flex flex={2}>
          <CustomCard title="Production Overview">
            <Flex gap={20} flex={1} align="center">
              <Flex flex={1}>
                <EnergyUsage />
              </Flex>
              <Flex flex={1}>
                <EnergyCost />
              </Flex>
            </Flex>
          </CustomCard>
        </Flex>
        <Flex flex={1}>
          <CustomCard title="Production Overview">
            <Flex align="center" flex={1}>
              <OverallUsage />
            </Flex>
          </CustomCard>
        </Flex>
        <Flex flex={1}>
          <CustomCard title="Production Overview">
            <Flex align="center" flex={1}>
              <OverallUsage />
            </Flex>
          </CustomCard>
        </Flex>
      </Flex>
      <Flex flex={1} gap={FLEX_GAP}>
        <Flex flex={1}>
          <CustomCard title="Monthly Usage">
            <Flex vertical flex={1}>
              <EnergyCost showOption={false} />
              <CustomHorizontalBarChart />
            </Flex>
          </CustomCard>
        </Flex>
        <Flex flex={1}>
          <CustomCard title="Daily Usage">
            <EnergyCost showOption={false} />
          </CustomCard>
        </Flex>
        <Flex flex={2}>
          <CustomCard title="Production Overview">
            <CustomLineBarChart />
          </CustomCard>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Production;
