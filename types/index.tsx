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
  name?: string;
  nameButton?: string;
  handleChange?: (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ) => void;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  iconButton?: IconType | any;
  textarea?: boolean;
};

export type ContactItemProps = {
  title: string;
  icon: IconType | any;
};

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
  title?: string;
  items?: number;
  image?: string | any;
  route?: string | any;
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
  price: number | any;
  category: string;
  brand: string;
  quantity: number | any;
  sold: number;
  images:
    | any
    | {
        url: string;
        asset_id: string;
        public_id: string;
      }[];
  color: string;
  ratings:
    | any
    | {
        star: number;
        postedby: string;
        _id?: string;
        comment?: string;
      }[];
  totalRating: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type BlogProps = {
  _id: string;
  title: string;
  description: string;
  category: string;
  numViews: number;
  isLiked: boolean;
  isDisliked: boolean;
  likes: string[];
  dislikes: string[];
  images:
    | any
    | [
        {
          url: string;
          asset_id: string;
          public_id: string;
        }
      ];
  author: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
};

export type FieldItemsProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type RegisterProps = {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  password: string;
};

export type ContactProps = {
  name: string;
  email: string;
  phone: string;
  comment: string;
};

export type UserProps = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  token: string;
};

export type CartProductProps = {
  product: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    sold: number;
    images: { url: string; asset_id: string; public_id: string }[];
    ratings: { star: number; postedby: string; _id: string }[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    brand: string;
    category: string;
    color: string;
    quantity: number;
    totalRating: string;
  };
  count: number;
  color: string;
  price: number;
  _id: string;
};

export type CartItemProps = {
  _id: string;
  products: {
    product: {
      _id: string;
      title: string;
      slug: string;
      description: string;
      price: number;
      sold: number;
      images: { url: string; asset_id: string; public_id: string }[];
      ratings: { star: number; postedby: string; _id: string }[];
      createdAt: string;
      updatedAt: string;
      __v: number;
      brand: string;
      category: string;
      color: string;
      quantity: number;
      totalRating: string;
    };
    count: number;
    color: string;
    price: number;
    _id: string;
  }[];
  cartTotal: Number;
  countTotal: Number;
  orderBy: string;
};
