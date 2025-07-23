import {
  Flex,
  Carousel,
  Typography,
  Button,
  Card,
  ConfigProvider,
  Form,
  Input,
  Select,
  Table,
} from "antd";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import { FLEX_GAP } from "@constants/commonStyle";
import CustomCard from "@components/CustomCard";
import StatCard from "@components/StatCard";
import CustomDonutChart from "@components/CustomDonutChart";
import CustomTable from "@components/CustomTable";
import CircleIcon from "@components/CircleIcon";
import CustomLineBarChart from "@components/CustomLineBarChart";
import EnergyUsage from "@components/EnergyUsage";
import EnergyCost from "@components/EnergyCost";
import UpDownSection from "@components/UpDownSection";
import { useEffect, useState } from "react";
import UpDownSummary from "../../components/UpDownSummary";

const FlOOR_CARD_THEME = {
  Y: {
    bgColor: "bg-emerald-500",
    textColor: "text-white",
    iconColor: "#fff",
  },
  N: {
    bgColor: "bg-rose-300",
    textColor: "text-rose-700",
    iconColor: "#F87171",
  },
};

function Home() {
  return (
    <Flex gap={FLEX_GAP} className="w-full h-full">
      <Flex vertical gap={FLEX_GAP} flex={2} className="h-full">
        <Flex flex={1} className="w-full" gap={FLEX_GAP}>
          <Flex flex={2}>
            <CustomCard title="Production Overview">
              <ProductionOverview />
            </CustomCard>
          </Flex>
          <Flex flex={1}>
            <CustomCard title="Energy Usage">
              <EnergyUsage />
            </CustomCard>
          </Flex>
        </Flex>
        <Flex gap={FLEX_GAP} flex={2}>
          <Flex flex={1.25}>
            <CustomCard title="Real time Production Up Down">
              <RealTimeProductionUpDown />
            </CustomCard>
          </Flex>
          <Flex vertical gap={FLEX_GAP} flex={2}>
            <Flex flex={1}>
              <CustomCard title="Real time Production Floor">
                <RealTimeProductionFloor />
              </CustomCard>
            </Flex>
            <Flex flex={1}>
              <CustomCard title="Real time Production Chart">
                <RealTimeProductionChart />
              </CustomCard>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical flex={1} gap={FLEX_GAP} className="h-full w-full">
        <Flex flex={2}>
          <CustomCard
            title="Machine Assign by Operator"
            option={
              <Button type="text" className="!px-0">
                <Flex align="center" gap={4}>
                  <Typography.Text className="!text-[#4E4E57] !font-bold">
                    View all
                  </Typography.Text>
                  <FaChevronRight color={"#4E4E57"} />
                </Flex>
              </Button>
            }
          >
            <MachineAssignByOperator />
          </CustomCard>
        </Flex>
        <Flex flex={1}>
          <CustomCard title="Energy Cost">
            <EnergyCost />
          </CustomCard>
        </Flex>
      </Flex>
    </Flex>
  );
}

function ProductionOverview() {
  return (
    <Flex vertical gap={FLEX_GAP} className="h-full">
      <Flex gap={FLEX_GAP} flex={1}>
        <StatCard
          title="Production Target"
          value={100000}
          unit="Units"
          bgColor="#E2E2FF"
          textColor="#8D8CB7"
        />
        <StatCard
          title="Energy Usage"
          value={100000}
          unit="KW/h"
          bgColor="#D1FFEE"
          textColor="#58AC8E"
        />
      </Flex>
      <Flex gap={FLEX_GAP} flex={1}>
        <StatCard
          title="Production Achieved"
          value={90000}
          unit="Units"
          bgColor="#FFF6EF"
          textColor="#E5A770"
        />
        <StatCard
          title="Waste"
          value={100}
          unit="Kg"
          bgColor="#FAD4D4"
          textColor="#D68E8B"
          addedValue={1}
        />
      </Flex>
    </Flex>
  );
}

function RealTimeProductionUpDown() {
  const sampleData = [
    {
      labelName: "Company A",
      value: 669,
      rmrk: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-xs !font-bold !text-[#E2A6A5]">
            {"(1.02%)"}
          </Typography.Text>
        </Flex>
      ),
    },
    {
      labelName: "Company B",
      value: 690,
      rmrk: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-xs !font-bold !text-[#E2A6A5]">
            {"(0.45%)"}
          </Typography.Text>
        </Flex>
      ),
    },
    {
      labelName: "Company C",
      value: 942,
      rmrk: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-xs !font-bold !text-[#E2A6A5]">
            {"(1.54%)"}
          </Typography.Text>
        </Flex>
      ),
    },
  ];

  return (
    <Flex vertical justify="space-between" flex={1}>
      <Flex vertical>
        <UpDownSection type="up" value={38100} />
        <UpDownSection type="down" value={1123} />
      </Flex>
      <Flex align="center" flex={1} justify="center">
        <Flex justify="center">
          <CustomDonutChart />
        </Flex>
        <Flex vertical gap={4} justify="center" flex={1}>
          {sampleData.map((item, index) => (
            <UpDownSummary
              labelName={item.labelName}
              value={item.value}
              rmrk={item.rmrk}
              key={index}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

function RealTimeProductionFloor() {
  const sampleData = [
    {
      machine_nm: "Machine 01",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 02",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 03",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 04",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 05",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 06",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 07",
      normal_yn: "N",
    },
    {
      machine_nm: "Machine 08",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 09",
      normal_yn: "N",
    },
    {
      machine_nm: "Machine 10",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 11",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 12",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 13",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 14",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 15",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 16",
      normal_yn: "N",
    },
    {
      machine_nm: "Machine 17",
      normal_yn: "Y",
    },
    {
      machine_nm: "Machine 18",
      normal_yn: "Y",
    },
  ];

  const [floorData, setFloorData] = useState(sampleData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFloorData((prevData) => {
        return prevData.map((item) => {
          const randomStatus = Math.random();
          let newStatus = item.normal_yn;
          if (randomStatus < 0.2) {
            newStatus = "N";
          } else if (randomStatus < 0.6) {
            newStatus = "Y";
          } else {
            newStatus = "Y";
          }
          return { ...item, normal_yn: newStatus };
        });
      });
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {},
      }}
    >
      <Flex vertical align="center" className={"h-full"} gap={4}>
        <Flex flex={1} className="w-full h-0" justify="center" align="center">
          <Flex vertical className="h-full" flex={1} gap={4}>
            <Flex
              justify="space-between"
              align="center"
              className="!mx-auto"
              gap={20}
            >
              <Button type="text" icon={<FaChevronLeft color="white" />} />

              <Typography.Text className="!text-xl !font-bold">
                Floor 01
              </Typography.Text>
              <Button type="text" icon={<FaChevronRight color="white" />} />
            </Flex>
            <Flex vertical className="h-full" flex={1} gap={8}>
              <Flex justify="space-between" gap={8} flex={1}>
                {floorData.slice(0, 6).map((item, index) => (
                  <FloorCard
                    key={index}
                    machine_nm={item.machine_nm}
                    normal_yn={item.normal_yn}
                  />
                ))}
              </Flex>

              <Flex justify="space-between" gap={8} flex={1}>
                {floorData.slice(6, 12).map((item, index) => (
                  <FloorCard
                    key={index}
                    machine_nm={item.machine_nm}
                    normal_yn={item.normal_yn}
                  />
                ))}
              </Flex>
              <Flex justify="space-between" gap={8} flex={1}>
                {floorData.slice(12, 18).map((item, index) => (
                  <FloorCard
                    key={index}
                    machine_nm={item.machine_nm}
                    normal_yn={item.normal_yn}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="center" gap={36}>
          <Flex align="center" gap={8}>
            <Card className="!bg-[#D1FFEE] w-4 h-4 !rounded-xs !border-none" />
            <Typography.Text>Running</Typography.Text>
          </Flex>
          <Flex align="center" gap={8}>
            <Card className="!bg-[#FAD4D4] w-4 h-4 !rounded-xs !border-none" />
            <Typography.Text>OFF</Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}

function FloorCard({ machine_nm, normal_yn }) {
  return (
    <Flex
      gap={4}
      className={`${FlOOR_CARD_THEME[normal_yn]?.bgColor} w-full rounded-lg !p-1`}
      vertical
      flex={1}
      justify="center"
    >
      <Flex justify="center">
        <Typography.Text
          className={`!text-xs !${FlOOR_CARD_THEME[normal_yn]?.textColor}`}
        >
          {machine_nm}
        </Typography.Text>
      </Flex>
      <Flex justify="center" gap={4}>
        <IoEye color={FlOOR_CARD_THEME[normal_yn]?.iconColor} />
        <Typography.Text
          className={`!text-xs !${FlOOR_CARD_THEME[normal_yn]?.textColor}`}
        >
          {"CNC (2mm)"}
        </Typography.Text>
      </Flex>
    </Flex>
  );
}

function MachineAssignByOperator() {
  const sampleData = [
    {
      id: 1,
      operator: "Sunbin Kim",
      machine: "001",
      shift: "Day",
      product: "22mm Bolt",
      status: "normal",
    },
    {
      id: 2,
      operator: "Jiwon Lee",
      machine: "002",
      shift: "Night",
      product: "16mm Nut",
      status: "success",
    },
    {
      id: 3,
      operator: "Suhyeon Park",
      machine: "003",
      shift: "Day",
      product: "30mm Washer",
      status: "error",
    },
    {
      id: 4,
      operator: "Yuna Kim",
      machine: "004",
      shift: "Night",
      product: "22mm Bolt",
      status: "normal",
    },
    {
      id: 5,
      operator: "Minjae Choi",
      machine: "005",
      shift: "Day",
      product: "16mm Nut",
      status: "success",
    },
    {
      id: 6,
      operator: "Seojin Oh",
      machine: "002",
      shift: "Night",
      product: "30mm Washer",
      status: "error",
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
      title: "Operator",
      dataIndex: "operator",
      key: "operator",
      width: 150,
    },
    {
      title: "Machine",
      dataIndex: "machine",
      key: "machine",
      width: 100,
    },
    {
      title: "Shift",
      dataIndex: "shift",
      key: "shift",
      width: 100,
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      flex: 1,
    },
  ];

  const [tableData, setTableData] = useState(sampleData);

  useEffect(() => {
    let intervalId;

    setInterval(() => {
      setTableData((prevData) => {
        return prevData.map((item) => {
          const randomStatus = Math.random();
          let newStatus = item.status;
          if (randomStatus < 0.3) {
            newStatus = "error";
          } else if (randomStatus < 0.6) {
            newStatus = "success";
          } else {
            newStatus = "normal";
          }

          return { ...item, status: newStatus };
        });
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
      <Flex vertical flex={1} justify="space-between">
        <Flex vertical>
          <Form className="flex gap-10">
            <Form.Item label="" className="flex-1">
              <Input
                prefix={<IoSearch color="#A0A0A0" />}
                placeholder="Search name"
              />
            </Form.Item>
            <Form.Item label="" className="flex-1">
              <Select
                options={[
                  {
                    label: "Factory 1",
                    value: "option1",
                  },
                ]}
                defaultValue={"option1"}
              />
            </Form.Item>
            <Form.Item label="" className="flex-1">
              <Select
                options={[
                  {
                    label: "Group 1",
                    value: "option1",
                  },
                ]}
                defaultValue={"option1"}
              />
            </Form.Item>
          </Form>

          <CustomTable data={tableData} columns={columns} />
        </Flex>
        <Flex vertical className="!mt-4" justify="center" flex={1} gap={8}>
          <Typography.Text className="!text-lg">
            Quality & Efficiency
          </Typography.Text>
          <Flex justify="space-between" gap={16}>
            <QualityCard title="Production Target" type="down" />
            <QualityCard title="Energy Usage" type="up" />
            <QualityCard title="Production Achieved" type="down" />
            <QualityCard title="Waste" type="up" />
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}

function QualityCard({ title, type }) {
  return (
    <Flex
      vertical
      align="center"
      className="bg-[#2E3650] rounded-lg !px-1 !py-2 w-full h-full"
    >
      <CircleIcon title={title} />
      <Typography.Text className="!text-[11px] text-align mt-1">
        {title}
      </Typography.Text>
      <Flex align="center" gap={8}>
        <Typography.Text className="!font-bold">90%</Typography.Text>

        <Flex gap={2} align="center">
          {type === "up" ? (
            <IoIosTrendingUp size={12} color="#8ED2BA" />
          ) : (
            <IoIosTrendingDown size={12} color="#E2A6A5" />
          )}
          {type === "up" ? (
            <Typography.Text className="!text-[#8ED2BA] !font-bold !text-[10px]">
              {"(3.02%)"}
            </Typography.Text>
          ) : (
            <Typography.Text className="!text-[#E2A6A5] !font-bold !text-[10px]">
              {"(3.02%)"}
            </Typography.Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

function RealTimeProductionChart() {
  return <CustomLineBarChart />;
}

export default Home;
