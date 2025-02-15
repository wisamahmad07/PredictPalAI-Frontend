import {
  faArrowsUpToLine,
  faCommentDots,
  faGear,
  faRankingStar,
  faShop,
  faTable,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const LINKS = [
  {
    title: "Dashboard",
    icon: faTable,
    path: "/dashboard",
  },
  {
    title: "Video Gallery",
    icon: faVideo,
    path: "/video-gallery",
  },
  {
    title: "Attack Planner",
    icon: faArrowsUpToLine,
    path: "/attack-planner",
  },
  {
    title: "Contest",
    icon: faRankingStar,
    path: "/contest",
  },
  {
    title: "Shop",
    icon: faShop,
    path: "/shop",
  },
  {
    title: "Community",
    icon: faCommentDots,
    path: "/community",
  },
  {
    title: "Settings",
    icon: faGear,
    path: "/settings",
  },
];

export default LINKS;
