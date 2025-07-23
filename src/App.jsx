import {
  Badge,
  Breadcrumb,
  Button,
  ConfigProvider,
  Flex,
  Image,
  Input,
  Layout,
  Menu,
  Space,
  Typography,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { TbBellRingingFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import enb from "./assets/enb.png";
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MENUS from "./constants/menus";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#1A1D2E",
            siderBg: "#21263A",
            bodyBg: "#2E3650",
          },
          Badge: {
            colorBorderBg: "none",
          },
          Menu: {
            itemBg: "#21263A",
            itemColor: "#fff",
            itemSelectedBg: "#18579E",
            itemSelectedColor: "#fff",
            subMenuItemSelectedColor: "#fff",
            subMenuItemSelectedBg: "#18579E",
            colorBgElevated: "#232638",
            collapsedIconSize: 25,
            itemHoverBg: "#5998E0",
            itemHoverColor: "#fff",
          },
          Breadcrumb: {
            itemColor: "#fff",
            fontSize: 20,
            lastItemColor: "#fff",
            separatorColor: "#fff",
          },
        },
      }}
    >
      <Layout className="h-screen flex flex-col">
        <CustomSider />
        <Layout className="h-screen flex flex-col">
          <CustomHeader />
          <Layout className="h-screen flex-1">
            <CustomContent />
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

function CustomHeader() {
  return (
    <ConfigProvider
      theme={{ components: { Typography: { colorText: "#fff" } } }}
    >
      <Header>
        <Flex align="center" className="h-full" gap={16}>
          <Flex align="center" justify="space-between" flex={1} gap={16}>
            <Flex align="center" gap={16}>
              <Typography.Text>Hi Kim!</Typography.Text>
              <CustomUserIcon />
              <Badge dot>
                <TbBellRingingFilled size={36} color={"#fff"} />
              </Badge>
            </Flex>
            <Space.Compact>
              <Input prefix={<FiSearch size={20} />} />
            </Space.Compact>
          </Flex>
        </Flex>
      </Header>
    </ConfigProvider>
  );
}

function CustomUserIcon() {
  return (
    <Flex
      align="center"
      justify="center"
      className="bg-white w-10 h-10 rounded-full"
    >
      <FaUser size={24} color={"#707070"} />
    </Flex>
  );
}

function CustomSider() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleSiderCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuItemClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Sider collapsible collapsed={collapsed} trigger={null} className="pt-6">
      <Flex vertical align="center">
        <Button
          type="text"
          onClick={handleSiderCollapse}
          icon={<GiHamburgerMenu size={40} color={"#fff"} />}
        />
        <Image src={enb} preview={false} width={80} />
      </Flex>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        items={MENUS}
        onClick={handleMenuItemClick}
      />
    </Sider>
  );
}

function CustomContent() {
  return (
    <Content className="pt-4 pb-20 px-8">
      <CustomBreadcrumb />
      <br />
      <Routes>{renderRoutes(MENUS)}</Routes>
    </Content>
  );
}

function renderRoutes(menus) {
  return menus.flatMap((route) => {
    const element = route.component ? (
      <Route key={route.path} path={route.path} element={route.component} />
    ) : (
      []
    );

    const children = route.children ? renderRoutes(route.children) : [];

    return [...(element ? [element] : []), ...children];
  });
}

function CustomBreadcrumb() {
  const location = useLocation();

  return (
    <Breadcrumb
      items={[
        { title: "Dashboard", className: "font-bold text-gray-200" },
        ...location.pathname
          .split("/")
          .filter(Boolean)
          .map((item) => ({
            title: item,
            className: "text-gray-300",
          })),
      ]}
    />
  );
}

export default App;
