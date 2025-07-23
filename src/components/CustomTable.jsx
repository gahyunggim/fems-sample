import { ConfigProvider, Table } from "antd";

function CustomTable({ data, columns }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            borderColor: "transparent",
            cellPaddingBlock: 4,
            headerBg: "#2E3650",
            headerColor: "#fff",
            headerSplitColor: "transparent",
            colorBgContainer: "transparent",
          },
        },
      }}
    >
      <Table
        align="center"
        dataSource={data}
        columns={columns}
        pagination={false}
        rowClassName={(record) => {
          if (
            record.status === "success" ||
            record.status === "Working" ||
            record.status === "Assigned" ||
            record.status === "Good"
          ) {
            return "text-green-400";
          }
          if (
            record.status === "error" ||
            record.status === "Absent" ||
            record.status === "Need Restock"
          ) {
            return "text-rose-300";
          }
          if (record.status === "Shift change") {
            return "text-orange-300";
          }

          return "text-[#5F5F69]";
        }}
      />
    </ConfigProvider>
  );
}

export default CustomTable;
