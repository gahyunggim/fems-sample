import Home from "@pages/home/Home";
import Hr from "@pages/hr/Hr";
import Energy from "@pages/statistic/energy/Energy";
import Production from "@pages/statistic/production/Production";
import Wms from "@pages/wms/Wms";
import { IoHomeOutline } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdConveyorBelt } from "react-icons/md";

const MENUS = [
  {
    key: "/Home",
    path: "/Home",
    component: <Home />,
    label: "Home",
    icon: <IoHomeOutline color="#fff" size={28} />,
  },
  {
    key: "/Statistic",
    icon: <FaChartSimple color="#fff" size={28} />,
    label: "Statistic",
    children: [
      {
        key: "/Statistic/Energy",
        path: "/Statistic/Energy",
        component: <Energy />,
        label: "Energy",
      },
      {
        key: "/Statistic/Production",
        path: "/Statistic/Production",
        component: <Production />,
        label: "Production",
      },
    ],
  },
  {
    key: "/HR",
    path: "/HR",
    component: <Hr />,
    label: "HR",
    icon: <FaUsers color="#fff" size={28} />,
  },
  {
    key: "/WMS",
    path: "/WMS",
    component: <Wms />,
    label: "WMS",
    icon: <MdConveyorBelt color="#fff" size={28} />,
  },
];

export default MENUS;
