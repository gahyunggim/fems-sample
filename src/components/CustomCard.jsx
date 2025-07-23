import { ConfigProvider, Flex, Typography } from "antd";

function CustomCard({ children, title, option = <></> }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: "#fff",
          },
        },
      }}
    >
      <Flex
        vertical
        className="bg-[#1A1D2E] w-full rounded-lg !px-4 !pt-2 !pb-4"
        gap={4}
      >
        <Flex justify="space-between" align="center">
          <Typography.Text className="!text-lg">{title}</Typography.Text>
          {option}
        </Flex>
        {children}
      </Flex>
    </ConfigProvider>
  );
}

export default CustomCard;
