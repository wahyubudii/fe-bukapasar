import React, { FormEvent } from "react";
import { IconType } from "react-icons";

export type LayoutProps = {
  children: React.ReactNode;
  customMeta?: {
    title?: string;
    description?: string;
    favicon?: string;
  };
};

export type MetaProps = {
  title?: string;
  description?: string;
  favicon?: string;
  type?: string;
};

export type RouteProps = {
  name: string;
  route: string;
};

export type MenuItemProps = {
  name?: string | any;
  icon?: IconType | any;
  route?: string | any;
  action?: () => void;
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

export type BreadCrumbsProps = {
  breadcrumb: string;
  href: string;
};

export type ProductProps = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  quantity: number;
  sold: number;
  images:
    | any
    | [
        {
          url: string;
          asset_id: string;
          public_id: string;
        }
      ];
  color: string;
  totalRating: string;
  ratings:
    | any
    | [
        {
          star: number;
          comment: string;
          postedby: string;
          _id: string;
        }
      ];
  createdAt: Date;
  updatedAt: Date;
};
