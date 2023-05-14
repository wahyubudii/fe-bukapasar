import { FiHeart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MenuItemProps } from "@/types";

export const userMenu: MenuItemProps[] = [
  {
    name: "Wishlist",
    icon: FiHeart,
    route: "/wishlist",
  },
  {
    name: "Address",
    icon: AiOutlineHome,
    route: "/",
  },
  {
    name: "Account",
    icon: BsPerson,
    route: "/",
  },
];
