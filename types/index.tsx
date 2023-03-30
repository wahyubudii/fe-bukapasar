import React, { FormEvent } from "react";
import { IconType } from "react-icons";

export type LayoutProps = {
  children: React.ReactNode;
  customMeta?: any;
};

export type MetaProps = {
  title?: string;
  description?: string;
  favicon?: string;
  type?: string;
};

export type routeProps = {
  name: string;
  route: string;
};

export type menuItemProps = {
  name: string;
  icon: IconType | any;
  route: string;
};

export type FormFieldProps = {
  classname?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  nameButton?: string;
  handleChange?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  iconButton?: IconType | any;
};

export type FooterItemProps = {
  title: string;
  route: string;
};

export type SocialMediaProps = {
  title: string;
  route: string;
  icon: IconType;
};

export type ContactItemProps = string[];

export type BannerProps = {
  header: string;
  title: string;
  url: string;
};

export type ServiceItemProps = {
  title: string;
  subTitle: string;
  image: string;
};

export type CategoryItemProps = {
  title: string;
  items: number;
  image: string;
};

export type BrandItemsProps = {
  title: string;
  image: string;
  route: string;
};

export type CardProps = {
  route: string;
  imageLink: string;
  brand?: string;
  time?: string;
  title: string;
  description?: string;
  rating?: number;
  isLiked?: boolean;
  price?: number | any;
  discount?: number | any;
};
