import { Button, ConfigProvider, Flex, Form, Input } from "antd";
import { IoSearch } from "react-icons/io5";

import { FLEX_GAP } from "@constants/commonStyle";
import CustomCard from "@components/CustomCard";
import EnergyCost from "@components/EnergyCost";
import EnergyUsage from "@components/EnergyUsage";
import OverallUsage from "@components/OverallUsage";
import CustomLineBarChart from "@components/CustomLineBarChart";
import CustomDonutChart from "@components/CustomDonutChart";
import UpDownSection from "@components/UpDownSection";
import CustomTable from "@components/CustomTable";

const efficiencySampleData = [
  {
    type: "success",
    value: 72,
  },
  {
    type: "normal",
    value: 28,
  },
];

function Energy() {
  return (
    <Flex vertical gap={FLEX_GAP} className="h-full">
      <Flex flex={1} gap={FLEX_GAP}>
        <Flex flex={2}>
          <CustomCard title="Energy Overview">
            <Flex gap={20}>
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
          <CustomCard title="Overall Usage">
            <OverallUsage />
          </CustomCard>
        </Flex>
        <Flex flex={1}>
          <CustomCard title="Production Overview">
            <OverallUsage />
          </CustomCard>
        </Flex>
      </Flex>
      <Flex flex={1} gap={FLEX_GAP}>
        <Flex flex={1}>
          <CustomCard title="Facility Usage">
            <EnergyCost showOption={false} />
          </CustomCard>
        </Flex>
        <Flex flex={1}>
          <CustomCard title="Realtime Usage">
            <EnergyCost showOption={false} />
          </CustomCard>
        </Flex>
        <Flex flex={2}>
          <CustomCard title="Efficiency Target">
            <EfficiencyTarget />
          </CustomCard>
        </Flex>
      </Flex>
      <Flex flex={1} gap={FLEX_GAP}>
        <Flex flex={1.5}>
          <CustomCard title="Production Overview">
            <CustomLineBarChart />
          </CustomCard>
        </Flex>
        <Flex flex={1.5}>
          <CustomCard title="Production Overview">
            <Flex align="center" flex={1} className="!w-full">
              <UpDownSection type="up" value={38100} />
            </Flex>
          </CustomCard>
        </Flex>
        <Flex flex={1}>
          <CustomCard title="Production Overview">
            <ProductionOverview />
          </CustomCard>
        </Flex>
      </Flex>
    </Flex>
  );
}

function EfficiencyTarget() {
  return (
    <Flex align="center" flex={1} gap={40}>
      <Flex justify="center" align="center">
        <CustomDonutChart
          data={efficiencySampleData}
          type="success"
          title="72%"
        />
      </Flex>
      <Flex flex={1}>
        <OverallUsage showButton={true} />
      </Flex>
    </Flex>
  );
}

const ProductionOverview = () => {
  const data = [
    {
      id: 1,
      nm: "4X4 plate",
      count: 231,
      location: "A-17",
    },
    {
      id: 2,
      nm: "22mm Bolt",
      count: 1132,
      location: "A-11",
    },
    {
      id: 3,
      nm: "3mm Bushing",
      count: 7822,
      location: "A-53",
      status: "success",
    },
    {
      id: 4,
      nm: "4X4 plate",
      count: 5333,
      location: "A-54",
      status: "success",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "nm",
      key: "nm",
      flex: 1,
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
      width: 100,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 100,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorText: "#fff",
            colorBgContainer: "#2E3650",
            colorBorder: "#2E3650",
            colorIcon: "#fff",
          },
          Input: {
            colorText: "#fff",
            colorBgContainer: "#2E3650",
            colorBorder: "#2E3650",
            colorTextPlaceholder: "#A0A0A0",
          },
        },
      }}
    >
      <Flex vertical>
        <Form>
          <Form.Item className="!ml-auto !w-[50%]">
            <Input
              prefix={<IoSearch color="#A0A0A0" />}
              placeholder="Search name"
            />
          </Form.Item>
        </Form>
      </Flex>
      <CustomTable data={data} columns={columns} />
    </ConfigProvider>
  );
};

export default Energy;
