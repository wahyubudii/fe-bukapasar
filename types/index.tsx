import { IconType } from "react-icons";

export type LayoutProps = {
  children: React.ReactNode;
  customMeta?: any;
};

export type MetaProps = {
  title: string;
  description: string;
  favicon: string;
  type: string;
};

export type routeProps = {
  name: string;
  route: string;
};

export type menuItemProps = {
  name: string;
  icon: IconType;
  route: string;
};
