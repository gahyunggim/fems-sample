import { Flex } from "antd";
import { AiOutlineAim } from "react-icons/ai";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const ICON_SIZE = 56;

const CIRCLE_ICON_THEME = {
  "Production Target": {
    iconBg: "bg-indigo-300",
    cardBg: "bg-indigo-200",
    text: "#6661FC",
    icon: <AiOutlineAim color="#6661FC" size={ICON_SIZE} />,
  },
  Orders: {
    iconBg: "bg-indigo-300",
    cardBg: "bg-indigo-200",
    text: "#6661FC",
    icon: <AiOutlineAim color="#6661FC" size={ICON_SIZE} />,
  },
  "Energy Usage": {
    iconBg: "bg-emerald-300",
    cardBg: "bg-teal-100",
    text: "#34D399",
    icon: <MdOutlineElectricBolt color="#58AC8E" size={ICON_SIZE} />,
  },
  Revenue: {
    iconBg: "bg-emerald-300",
    cardBg: "bg-teal-100",
    text: "#34D399",
    icon: <MdOutlineElectricBolt color="#58AC8E" size={ICON_SIZE} />,
  },
  "Production Achieved": {
    iconBg: "bg-orange-200",
    cardBg: "bg-orange-50",
    text: "#FBBF24",
    icon: <FaFlag color="#E5A770" size={ICON_SIZE} />,
  },
  Processing: {
    iconBg: "bg-orange-200",
    cardBg: "bg-orange-50",
    text: "#FBBF24",
    icon: <FaFlag color="#E5A770" size={ICON_SIZE} />,
  },
  Waste: {
    iconBg: "bg-rose-300",
    cardBg: "bg-red-100",
    text: "#F87171",
    icon: <BsFillTrash3Fill color="#D68E8B" size={ICON_SIZE} />,
  },
  "Average Fullfillment Time": {
    iconBg: "bg-rose-300",
    cardBg: "bg-red-100",
    text: "#F87171",
    icon: <BsFillTrash3Fill color="#D68E8B" size={ICON_SIZE} />,
  },
  User: {
    iconBg: "bg-white",
    cardBg: "bg-blue-100",
    text: "#3B82F6",
    icon: <FaUser color="#707070" size={ICON_SIZE} />,
  },
};

function CircleIcon({ title }) {
  return (
    <Flex
      justify="center"
      align="center"
      className={`${CIRCLE_ICON_THEME[title]?.iconBg} w-20 h-20 rounded-full`}
    >
      {CIRCLE_ICON_THEME[title]?.icon}
    </Flex>
  );
}

export default CircleIcon;
