import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  ConfigProvider,
  Divider,
  Flex,
  Form,
  Input,
  Select,
  Space,
  Typography,
} from "antd";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { GrDeliver, GrInspect } from "react-icons/gr";
import { TfiPackage } from "react-icons/tfi";
import { GiHammerNails } from "react-icons/gi";
import { FaCog, FaSprayCan } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

import { FLEX_GAP } from "@constants/commonStyle";
import CustomCard from "@components/CustomCard";
import StatCard from "@components/StatCard";
import CustomLineChart from "@components/CustomLineChart";
import CustomTable from "@components/CustomTable";
import CountUp from "react-countup";

const ICON_SIZE = 48;

const PROCESS_THEME = {
  PENDING: {
    iconBgColor: "bg-orange-200",
    iconColor: "#E5A770",
  },
  IN_PROGRESS: {
    iconBgColor: "bg-indigo-300",
    iconColor: "#6661FC",
  },
  COMPLETED: {
    iconBgColor: "bg-emerald-300",
    iconColor: "#58AC8E",
  },
};

function Wms() {
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
      <Flex gap={FLEX_GAP} className="w-full h-full">
        <Flex vertical gap={FLEX_GAP} flex={2}>
          <Flex flex={1} gap={FLEX_GAP}>
            <Flex flex={2}>
              <CustomCard title="Production Overview">
                <ProductionOverview />
              </CustomCard>
            </Flex>
            <Flex flex={1}>
              <CustomCard title="Today">
                <Today />
              </CustomCard>
            </Flex>
          </Flex>
          <Flex flex={1.5} gap={FLEX_GAP}>
            <Flex flex={1}>
              <CustomCard title="Outbound Units">
                <StatWithLineChart
                  value={3108}
                  unit="Units"
                  prevValue={1200}
                  price={237193}
                />
              </CustomCard>
            </Flex>
            <Flex flex={1}>
              <CustomCard title="Revenue">
                <StatWithLineChart
                  value={1030108}
                  unit="KRW"
                  prevValue={274283}
                  price={237193}
                />
              </CustomCard>
            </Flex>
          </Flex>
          <Flex flex={0.75}>
            <CustomCard title="Processing">
              <Processing />
            </CustomCard>
          </Flex>
        </Flex>
        <Flex flex={1}>
          <CustomCard title="Stock">
            <Stock />
          </CustomCard>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}

function ProductionOverview() {
  return (
    <Flex vertical gap={FLEX_GAP} className="h-full">
      <Flex gap={FLEX_GAP} flex={1}>
        <StatCard
          title="Orders"
          value={2103}
          unit="Units"
          bgColor="#E2E2FF"
          textColor="#8D8CB7"
        />
        <StatCard
          title="Revenue"
          value={100000}
          unit="KRW"
          bgColor="#D1FFEE"
          textColor="#58AC8E"
        />
      </Flex>
      <Flex gap={FLEX_GAP} flex={1}>
        <StatCard
          title="Processing"
          value={278}
          unit="Units"
          bgColor="#FFF6EF"
          textColor="#E5A770"
        />
        <StatCard
          title="Average Fullfillment Time"
          value={6.32}
          unit="Hours"
          bgColor="#FAD4D4"
          textColor="#D68E8B"
          addedValue={1}
        />
      </Flex>
    </Flex>
  );
}

function Today() {
  return (
    <Flex vertical gap={2}>
      <TodayCard title="Average Cost" value={3218} unit="Units" />
      <TodayCard title="Revenue" value={729284} unit="KRW" />
    </Flex>
  );
}

function TodayCard({ title, value, unit }) {
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedValue((prev) => prev + 5);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex vertical gap={2} justify="center" className="w-full">
      <Typography.Text className="!pl-2 !text-base !text-[#5F5F69]">
        {title}
      </Typography.Text>
      <Flex className="bg-[#2E3650] !py-4 !px-2 rounded-lg" justify="center">
        <Flex gap={8}>
          <Typography.Text className="!text-xl !text-white !font-bold">
            <CountUp
              start={displayedValue - 5}
              end={displayedValue}
              separator=","
              className="!text-lg text-white !font-bold"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            />
          </Typography.Text>
          <Typography.Text className="!text-xl !text-white !font-bold">
            {unit}
          </Typography.Text>
        </Flex>
      </Flex>
      <Flex align="center" justify="center" gap={8}>
        <IoIosTrendingDown color="#8ED2BA" />
        <Typography.Text className="!text-base !font-bold !text-[#8ED2BA]">
          {"(3.02%)"}
        </Typography.Text>
        <Typography.Text className="!text-sm !text-white">
          VS Sameday Last Week
        </Typography.Text>
      </Flex>
    </Flex>
  );
}

function StatWithLineChart({ value, unit, prevValue, price }) {
  const [displayedValue, setDisplayedValue] = useState(value);

  useState(() => {
    const intervalId = setInterval(() => {
      setDisplayedValue((prev) => prev + 5);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex vertical gap={16} justify="center" className="w-full">
      <Flex vertical>
        <Typography.Text className="!pl-2 !text-base !text-[#5F5F69]">
          Average Cost
        </Typography.Text>
        <Flex className="bg-[#2E3650] !py-4 !px-2 rounded-lg" justify="center">
          <Flex gap={60}>
            <Flex vertical>
              <Flex gap={12}>
                <Typography.Text className="!text-xl !text-white !font-bold">
                  <CountUp
                    start={displayedValue - 5}
                    end={displayedValue}
                    separator=","
                    className="!text-lg text-white !font-bold"
                    style={{ fontSize: "24px", fontWeight: "bold" }}
                  />
                </Typography.Text>
                <Typography.Text className="!text-xl !text-white !font-bold">
                  {unit}
                </Typography.Text>
              </Flex>
              <Flex justify="space-between">
                <Flex justify="space-between" gap={4}>
                  <Typography.Text className="!text-sm !text-[#A6A6B4] !font-bold">
                    {prevValue.toLocaleString()}
                  </Typography.Text>
                  <Typography.Text className="!text-sm !text-[#A6A6B4] !font-bold">
                    {unit}
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
                  {price.toLocaleString()}
                </Typography.Text>
                <Typography.Text className="!text-sm !text-[#A6A6B4] !font-bold">
                  KRW
                </Typography.Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical>
        <Typography.Text className="!pl-2 !text-base !text-[#5F5F69]">
          Average Cost
        </Typography.Text>
        <CustomLineChart />
      </Flex>
    </Flex>
  );
}

function Processing() {
  const processData = [
    {
      name: "Receiving",
      icon: (
        <TfiPackage
          size={ICON_SIZE}
          color={PROCESS_THEME.COMPLETED.iconColor}
        />
      ),
      status: "COMPLETED",
    },
    {
      name: "Forming",
      icon: (
        <GiHammerNails
          size={ICON_SIZE}
          color={PROCESS_THEME.COMPLETED.iconColor}
        />
      ),
      status: "COMPLETED",
    },
    {
      name: "Threading",
      icon: (
        <FaCog size={ICON_SIZE} color={PROCESS_THEME.COMPLETED.iconColor} />
      ),
      status: "COMPLETED",
    },
    {
      name: "Coating",
      icon: (
        <FaSprayCan
          size={ICON_SIZE}
          color={PROCESS_THEME["IN_PROGRESS"].iconColor}
        />
      ),
      status: "IN_PROGRESS",
    },
    {
      name: "Inspection",
      icon: (
        <GrInspect size={ICON_SIZE} color={PROCESS_THEME.PENDING.iconColor} />
      ),
      status: "PENDING",
    },
    {
      name: "Shipping",
      icon: (
        <GrDeliver size={ICON_SIZE} color={PROCESS_THEME.PENDING.iconColor} />
      ),
      status: "PENDING",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Badge: {
            dotSize: 12,
          },
        },
      }}
    >
      <Flex flex={1}>
        <Space
          split={<Divider className="!bg-[#2B3249] !w-8 !h-1.5 !mt-1.75" />}
        >
          {processData.map((step, index) => (
            <Flex vertical>
              {step.status === "IN_PROGRESS" ? (
                <Badge dot>
                  <ProcessIcon
                    key={index}
                    icon={step.icon}
                    type={step.status}
                  />
                </Badge>
              ) : (
                <ProcessIcon key={index} icon={step.icon} type={step.status} />
              )}
              <Flex vertical align="center" className="!mt-2">
                <Typography.Text
                  className={`!text-sm !${
                    step.status === "IN_PROGRESS"
                      ? "text-white"
                      : "text-[#A6A6B4]"
                  }`}
                >
                  {step.name}
                </Typography.Text>
              </Flex>
            </Flex>
          ))}
        </Space>
      </Flex>
    </ConfigProvider>
  );
}

function ProcessIcon({ icon, type }) {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      className={`w-24 h-24 ${PROCESS_THEME[type].iconBgColor} rounded-full`}
    >
      {icon}
    </Flex>
  );
}

function Stock() {
  const [form] = Form.useForm();

  const exampleData = [
    {
      id: 1,
      name: "4X4 plate",
      count: 231,
      location: "A-17",
      status: "Normal",
    },
    {
      id: 2,
      name: "22mm Bolt",
      count: 1132,
      location: "A-11",
      status: "Normal",
    },
    {
      id: 3,
      name: "3mm Bushing",
      count: 7822,
      location: "A-53",
      status: "Good",
    },
    {
      id: 4,
      name: "A32 Gasket",
      count: 5333,
      location: "A-54",
      status: "Good",
    },
    {
      id: 5,
      name: "12-3 Cover",
      count: 1392,
      location: "C-37",
      status: "Normal",
    },
    {
      id: 6,
      name: "M347 Bulb",
      count: 2342,
      location: "B-53",
      status: "Normal",
    },
    {
      id: 7,
      name: "15132 Battery",
      count: 12,
      location: "F-01",
      status: "Need Restock",
    },
    {
      id: 8,
      name: "4X4 plate",
      count: 250,
      location: "A-18",
      status: "Normal",
    },
    {
      id: 9,
      name: "22mm Bolt",
      count: 998,
      location: "A-12",
      status: "Normal",
    },
    {
      id: 10,
      name: "3mm Bushing",
      count: 5000,
      location: "A-55",
      status: "Good",
    },
    {
      id: 11,
      name: "A32 Gasket",
      count: 4600,
      location: "A-56",
      status: "Good",
    },
    {
      id: 12,
      name: "12-3 Cover",
      count: 1100,
      location: "C-38",
      status: "Normal",
    },
    {
      id: 13,
      name: "M347 Bulb",
      count: 2500,
      location: "B-54",
      status: "Normal",
    },
    {
      id: 14,
      name: "15132 Battery",
      count: 8,
      location: "F-02",
      status: "Need Restock",
    },
    { id: 15, name: "4X4 plate", count: 300, location: "A-19", status: "Good" },
    {
      id: 16,
      name: "22mm Bolt",
      count: 1050,
      location: "A-13",
      status: "Normal",
    },
    {
      id: 17,
      name: "3mm Bushing",
      count: 7000,
      location: "A-57",
      status: "Good",
    },
    {
      id: 18,
      name: "A32 Gasket",
      count: 5200,
      location: "A-58",
      status: "Good",
    },
    {
      id: 19,
      name: "12-3 Cover",
      count: 1450,
      location: "C-39",
      status: "Normal",
    },
    {
      id: 20,
      name: "M347 Bulb",
      count: 2100,
      location: "B-55",
      status: "Normal",
    },
    {
      id: 21,
      name: "15132 Battery",
      count: 15,
      location: "F-03",
      status: "Need Restock",
    },
    {
      id: 22,
      name: "4X4 plate",
      count: 275,
      location: "A-20",
      status: "Normal",
    },
    {
      id: 23,
      name: "22mm Bolt",
      count: 1088,
      location: "A-14",
      status: "Good",
    },
  ];

  const [sampleData, setSampleData] = useState(exampleData);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      flex: 1,
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
      width: 30,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 30,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
    },
  ];

  return (
    <Flex vertical>
      <Form
        form={form}
        className="flex gap-4"
        onFinish={(values) => {
          setSampleData(
            exampleData.filter((item) =>
              item.name.toLowerCase().includes(values.name?.toLowerCase())
            )
          );
        }}
      >
        <Form.Item name="name">
          <Input
            prefix={<IoSearch color="#A0A0A0" />}
            placeholder="Search name"
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="Search Name"
            options={[
              {
                label: "Factory 01",
                value: "option1",
              },
            ]}
            defaultValue="option1"
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="Search Name"
            options={[
              {
                label: "Group 01",
                value: "option1",
              },
            ]}
            defaultValue="option1"
          />
        </Form.Item>
        <Button className="invisible" htmlType="submit"></Button>
      </Form>
      <CustomTable columns={columns} data={sampleData} />
    </Flex>
  );
}

export default Wms;
