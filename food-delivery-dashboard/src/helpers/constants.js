import IconOrder from "../assets/statistics_icon/icon_order.svg";
import IconDelivered from "../assets/statistics_icon/icon_delivered.svg";
import IconOrderCanceled from "../assets/statistics_icon/icon_order_cross.svg";
import IconBag from "../assets/statistics_icon/icon_bag.svg";

export const statistics = [
  {
    img: IconOrder,
    count: 75,
    description: "Total Orders",
    isUp: true,
    percent: 4,
  },
  {
    img: IconDelivered,
    count: 357,
    description: "Total Delivered",
    isUp: true,
    percent: 4,
  },
  {
    img: IconOrderCanceled,
    count: 65,
    description: "Total Canceled",
    isUp: false,
    percent: 25,
  },
  {
    img: IconBag,
    count: "$128",
    description: "Total Revenue",
    isUp: false,
    percent: 12,
  },
];

