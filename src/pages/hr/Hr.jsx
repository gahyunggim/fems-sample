import { useEffect, useState } from "react";
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Select,
  Typography,
} from "antd";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { FaUser } from "react-icons/fa";

import { FLEX_GAP } from "@constants/commonStyle";
import CustomCard from "@components/CustomCard";
import CustomTable from "@components/CustomTable";
import CustomDonutChart from "@components/CustomDonutChart";
import UpDownSection from "@components/UpDownSection";
import EnergyCost from "@components/EnergyCost";
import CircleIcon from "@components/CircleIcon";

function Hr() {
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
      <Flex gap={FLEX_GAP} className="h-full">
        <Flex vertical gap={FLEX_GAP} flex={2} className="h-full">
          <Flex flex={1}>
            <CustomCard title="HR Management">
              <HrManagement />
            </CustomCard>
          </Flex>
          <Flex flex={1} gap={FLEX_GAP}>
            <Flex flex={1}>
              <CustomCard title="Operator Management">
                <OperatorManagement />
              </CustomCard>
            </Flex>
            <Flex flex={1}>
              <CustomCard title="Statistics">
                <Statistics />
              </CustomCard>
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical gap={FLEX_GAP} flex={1} className="h-full">
          <Flex flex={1}>
            <CustomCard title="Work Flow">
              <WorkFlow />
            </CustomCard>
          </Flex>
          <Flex flex={1}>
            <CustomCard title="Labor Cost">
              <LaborCost />
            </CustomCard>
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}

function HrManagement() {
  const timeOptions = [{ label: "February", value: "option1" }];
  const groupOptions = [{ label: "Group 01", value: "option1" }];

  const sampleData = [
    {
      id: 1,
      operator: "Minjae Choi",
      status: "Working",
      machine: "003",
      shift: "Night",
      hourStart: "20:00",
      hourEnd: "05:00",
      product: "16mm Nut",
      rate: "100%",
    },
    {
      id: 2,
      operator: "Yuna Kim",
      status: "Working",
      machine: "002",
      shift: "Day",
      hourStart: "08:00",
      hourEnd: "17:00",
      product: "22mm Bolt",
      rate: "100%",
    },
    {
      id: 3,
      operator: "Doyeon Jung",
      status: "On Break",
      machine: "005",
      shift: "Night",
      hourStart: "21:00",
      hourEnd: "06:00",
      product: "M12 Screw",
      rate: "92%",
    },
    {
      id: 4,
      operator: "Hyunjin Seo",
      status: "Absent",
      machine: "001",
      shift: "Day",
      hourStart: "09:00",
      hourEnd: "18:00",
      product: "30mm Washer",
      rate: "92%",
    },
    {
      id: 5,
      operator: "Seojin Oh",
      status: "Day Off",
      machine: "004",
      shift: "Night",
      hourStart: "20:30",
      hourEnd: "05:30",
      product: "Steel Clamp",
      rate: "107%",
    },
    {
      id: 6,
      operator: "Jiwon Lee",
      status: "Day Off",
      machine: "006",
      shift: "Day",
      hourStart: "07:00",
      hourEnd: "16:00",
      product: "22mm Bolt",
      rate: "107%",
    },
    {
      id: 7,
      operator: "Jisoo Han",
      status: "Shift change",
      machine: "002",
      shift: "Night",
      hourStart: "22:00",
      hourEnd: "07:00",
      product: "16mm Nut",
      rate: "73%",
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
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
      title: "Hour Start",
      dataIndex: "hourStart",
      key: "hourStart",
      width: 100,
    },
    {
      title: "Hour End",
      dataIndex: "hourEnd",
      key: "hourEnd",
      width: 100,
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      flex: 1,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      width: 100,
    },
    {
      title: "Manage",
      dataIndex: "rate",
      key: "rate",
      width: 100,
      render: () => (
        <Flex justify="center">
          <Button
            size="small"
            className="!bg-[#2E364F] !border-none !text-white"
          >
            Manage
          </Button>
        </Flex>
      ),
    },
  ];

  const [tableData, setTableData] = useState(sampleData);

  useState(() => {
    const intervalId = setInterval(() => {
      setTableData((prev) => {
        return prev.map((item) => {
          const randomStatus = Math.random();
          let newStatus;
          if (randomStatus < 0.4) {
            newStatus = "Working";
          } else if (randomStatus < 0.7) {
            newStatus = "On Break";
          } else if (randomStatus < 0.8) {
            newStatus = "Absent";
          } else if (randomStatus < 0.9) {
            newStatus = "Day Off";
          } else {
            newStatus = "Shift change";
          }
          return { ...item, status: newStatus };
        });
      });
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <Flex vertical>
      <Form className="flex gap-4">
        <Form.Item>
          <Input
            prefix={<IoSearch color="#A0A0A0" />}
            placeholder="Search name"
          />
        </Form.Item>
        <Form.Item>
          <Select options={timeOptions} defaultValue={timeOptions[0].value} />
        </Form.Item>
        <Form.Item>
          <Select options={groupOptions} defaultValue={groupOptions[0].value} />
        </Form.Item>
      </Form>
      <CustomTable data={tableData} columns={columns} />
      <Flex justify="center" className="!mt-1">
        <Button className="!px-40 !bg-[#2E364F] !border-none !text-white">
          <Flex align="center" gap={12}>
            <Typography.Text className="!text-white !font-bold">
              More
            </Typography.Text>
            <FaChevronDown />
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}

function WorkFlow() {
  const samplData = [
    {
      id: 1,
      operator: "Jiwon Lee",
      machine: "003",
      shift: "Night",
      product: "M12 Screw",
      status: "normal",
    },
    {
      id: 2,
      operator: "Yuna Kim",
      machine: "005",
      shift: "Day",
      product: "16mm Nut",
      status: "normal",
    },
    {
      id: 3,
      operator: "Doyeon Jung",
      machine: "002",
      shift: "Night",
      product: "30mm Washer",
      status: "success",
    },
    {
      id: 4,
      operator: "Hyunjin Seo",
      machine: "006",
      shift: "Day",
      product: "22mm Bolt",
      status: "success",
    },
    {
      id: 5,
      operator: "Taeyang Lim",
      machine: "004",
      shift: "Night",
      product: "Steel Clamp",
      status: "normal",
    },
    {
      id: 6,
      operator: "Haeun Kwon",
      machine: "001",
      shift: "Day",
      product: "30mm Washer",
      status: "normal",
    },
    {
      id: 7,
      operator: "Minjae Choi",
      machine: "002",
      shift: "Night",
      product: "16mm Nut",
      status: "error",
    },
  ];

  const [tableData, setTableData] = useState(samplData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTableData((prev) => {
        return prev.map((item) => {
          const randomStatus = Math.random();
          let newStatus;
          if (randomStatus < 0.3) {
            newStatus = "success";
          } else if (randomStatus < 0.7) {
            newStatus = "normal";
          } else if (randomStatus < 0.9) {
            newStatus = "error";
          } else {
            newStatus = "Shift change";
          }
          return { ...item, status: newStatus };
        });
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

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
      width: 120,
    },
    {
      title: "Machine",
      dataIndex: "machine",
      key: "machine",
      width: 80,
    },
    {
      title: "Shift",
      dataIndex: "shift",
      key: "shift",
      width: 80,
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      flex: 1,
    },
  ];

  return (
    <Flex vertical>
      <Form className="flex gap-4">
        <Form.Item>
          <Input
            prefix={<IoSearch color="#A0A0A0" />}
            placeholder="Search Name"
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
      </Form>
      <CustomTable data={tableData} columns={columns} />
    </Flex>
  );
}

function Statistics() {
  const sampleData = [
    {
      labelName: "Data A",
      value: 1000,
      rmrk: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-xs !font-bold !text-[#E2A6A5]">
            {"(3.02%)"}
          </Typography.Text>
        </Flex>
      ),
    },
    {
      labelName: "Data B",
      value: 1000,
      rmrk: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-xs !font-bold !text-[#E2A6A5]">
            {"(3.02%)"}
          </Typography.Text>
        </Flex>
      ),
    },
    {
      labelName: "Data C",
      value: 1000,
      rmrk: (
        <Flex align="center" gap={2}>
          <IoIosTrendingDown color="#E2A6A5" />
          <Typography.Text className="!text-xs !font-bold !text-[#E2A6A5]">
            {"(3.02%)"}
          </Typography.Text>
        </Flex>
      ),
    },
  ];

  return (
    <Flex vertical gap={FLEX_GAP} flex={1}>
      <Flex justify="center" align="center" flex={1} className="!w-full">
        <Flex>
          <CustomDonutChart />
        </Flex>
        <Flex vertical gap={4} justify="center" align="flex-start">
          {sampleData.map((item, index) => (
            <Flex key={index} align="center" justify="space-between" gap={12}>
              <Typography.Text className="!text-xs !font-bold">
                {item.labelName}
              </Typography.Text>
              <Flex align="center" gap={8}>
                <Typography.Text className="!text-xs !font-bold">
                  {item.value.toLocaleString()}
                </Typography.Text>
                {item.rmrk}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex vertical flex={1} gap={4}>
        <Typography.Text className="!text-lg">Productivity</Typography.Text>
        <UpDownSection type="up" value={38100} />
      </Flex>
    </Flex>
  );
}

function LaborCost() {
  const sampleData = [
    {
      id: 1,
      operator: "Doyeon Jung",
      machine: "002",
      shift: "Night",
      product: "30mm Washer",
      labor: 3852400,
    },
    {
      id: 2,
      operator: "Jiwon Lee",
      machine: "005",
      shift: "Day",
      product: "M12 Screw",
      labor: 4215700,
    },
    {
      id: 3,
      operator: "Haeun Kwon",
      machine: "003",
      shift: "Night",
      product: "16mm Nut",
      labor: 3998000,
    },
  ];

  const columns = [
    {
      title: "Operator",
      dataIndex: "operator",
      key: "operator",
    },
    {
      title: "Machine",
      dataIndex: "machine",
      key: "machine",
    },
    {
      title: "Shift",
      dataIndex: "shift",
      key: "shift",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Labor Cost",
      dataIndex: "labor",
      key: "labor",
      render: (value) => value.toLocaleString() + " KRW",
    },
  ];

  return (
    <Flex vertical gap={FLEX_GAP}>
      <EnergyCost />
      <Flex vertical gap={2}>
        <Typography.Text className="!pl-2 !text-base !text-[#5F5F69]">
          Labor Cost by Operator
        </Typography.Text>
        <CustomTable data={sampleData} columns={columns} />
      </Flex>
    </Flex>
  );
}

function OperatorManagement() {
  const sampleData = [
    {
      id: 1,
      task: "Assembly",
      machine: "001",
      product: "22mm Bolt",
      status: "Assigned",
    },
    {
      id: 2,
      task: "Q/C",
      machine: "001",
      product: "22mm Bolt",
      status: "-",
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
      title: "Task",
      dataIndex: "task",
      key: "task",
      width: 100,
    },
    {
      title: "Machine",
      dataIndex: "machine",
      key: "machine",
      width: 80,
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      flex: 1,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Flex>
            <Button className="!bg-[#2E364F] !border-none !text-white flex-1">
              {record.status === "Assigned" ? "Remove" : "Assign"}
            </Button>
          </Flex>
        );
      },
    },
  ];

  return (
    <Flex vertical flex={1}>
      <Flex align="center" gap={40} justify="center" flex={1}>
        <CircleIcon title="User" />
        <Flex vertical gap={2}>
          <Typography.Text className="!pl-2 !text-base !text-[#5F5F69]">
            Labor Cost by Operator
          </Typography.Text>
          <Flex
            className="bg-[#2E3650] !py-4 !px-2 rounded-lg"
            justify="center"
          >
            <Flex gap={60}>
              <Flex vertical>
                <Flex gap={12}>
                  <Typography.Text className="!text-xl !text-white !font-bold">
                    Sunbin Kim
                  </Typography.Text>
                </Flex>
                <Flex justify="space-between">
                  <Typography.Text className="!text-sm !text-[#A6A6B4]">
                    22mm Bolt Operator
                  </Typography.Text>
                </Flex>
              </Flex>
              <Flex vertical justify="space-between">
                <Flex align="center" gap={2}>
                  <IoIosTrendingDown color="#E2A6A5" />
                  <Typography.Text className="!text-base !font-bold !text-[#E2A6A5]">
                    {"(18.02%)"}
                  </Typography.Text>
                </Flex>
                <Flex gap={4}>
                  <Typography.Text className="!text-sm !text-[#A6A6B4]">
                    -1,293
                  </Typography.Text>
                  <Typography.Text className="!text-sm !text-[#A6A6B4]">
                    Units
                  </Typography.Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical flex={1} gap={4}>
        <Typography.Text className="!text-lg">Task</Typography.Text>
        <Form className="flex gap-4">
          <Form.Item>
            <Input
              prefix={<IoSearch color="#A0A0A0" />}
              placeholder="Search name"
            />
          </Form.Item>
          <Form.Item>
            <Select
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
              options={[
                {
                  label: "Group 01",
                  value: "option1",
                },
              ]}
              defaultValue="option1"
            />
          </Form.Item>
        </Form>
        <CustomTable data={sampleData} columns={columns} />
      </Flex>
    </Flex>
  );
}

export default Hr;
